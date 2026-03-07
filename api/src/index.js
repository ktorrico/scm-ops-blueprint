require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Logger estructurado
const log = (level, message, meta = {}) => {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level,
    message,
    version: process.env.APP_VERSION || '0.0.0',
    env: process.env.NODE_ENV || 'development',
    ...meta
  }));
};

// Middleware de request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    log('info', 'HTTP Request', {
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration_ms: Date.now() - start
    });
  });
  next();
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: process.env.APP_VERSION || '0.0.0',
    env: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Metrics endpoint
let requestCount = 0;
let errorCount = 0;

app.use((req, res, next) => {
  requestCount++;
  next();
});

app.get('/metrics', (req, res) => {
  res.json({
    requests_total: requestCount,
    errors_total: errorCount,
    uptime_seconds: Math.floor(process.uptime()),
    version: process.env.APP_VERSION || '0.0.0',
    env: process.env.NODE_ENV || 'development'
  });
});

// Items endpoint con feature flag
app.get('/api/items', (req, res) => {
  const maintenanceMode = process.env.FEATURE_MAINTENANCE === 'true';
  const newUI = process.env.FEATURE_NEW_ITEMS_UI === 'true';

  if (maintenanceMode) {
    errorCount++;
    return res.status(503).json({ error: 'Service under maintenance' });
  }

  res.json({
    items: [],
    message: 'SCM Ops Blueprint API',
    newUI: newUI,
    version: process.env.APP_VERSION || '0.0.0'
  });
});

const server = app.listen(port, () => {
  log('info', 'Server started', { port });
});

module.exports = { app, server };
