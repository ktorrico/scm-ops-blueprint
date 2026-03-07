const config = require('./config');

const flags = {
  NEW_ITEMS_UI: config.features.newItemsUI,
  MAINTENANCE_MODE: config.features.maintenance,
};

console.log('[FLAGS]', JSON.stringify(flags));

module.exports = flags;
