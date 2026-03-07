const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: process.env.APP_VERSION || '0.1.0',
    env: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/items', (req, res) => {
  res.json({ items: [], message: 'SCM Ops Blueprint API' });
});

const server = app.listen(port, () => {
  console.log(`[${process.env.NODE_ENV}] API running on port ${port}`);
});

module.exports = { app, server };
