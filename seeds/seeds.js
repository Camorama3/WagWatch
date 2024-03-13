const sequelize = require('../config/connection');
const { User, Booking } = require('../models');

const userData = require('./userData.json');
const bookingData = require('./bookingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const booking of bookingData) {
    await Booking.create({
      ...booking,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();