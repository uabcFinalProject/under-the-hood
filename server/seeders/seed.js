const db = require('../config/connection');
const { User, ServiceItem } = require('../models');
const userSeeds = require('./userSeeds.json');
const serviceItemSeeds = require('./serviceItemSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await ServiceItem.deleteMany({});
    await User.create(userSeeds);
    await ServiceItem.create(serviceItemSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
