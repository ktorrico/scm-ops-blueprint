require('dotenv').config();

const required = ['NODE_ENV', 'DATABASE_URL'];
const missing = required.filter(key => !process.env[key]);

if (missing.length > 0 && process.env.NODE_ENV !== 'test') {
  console.error(`[CONFIG ERROR] Missing required env vars: ${missing.join(', ')}`);
  process.exit(1);
}

module.exports = {
  port: parseInt(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
  appVersion: process.env.APP_VERSION || '0.0.0',
  features: {
    newItemsUI: process.env.FEATURE_NEW_ITEMS_UI === 'true',
    maintenance: process.env.FEATURE_MAINTENANCE === 'true',
  }
};
