const User = require('./user');
const Booking = require('./booking');

User.hasMany(Booking, {
    foreignKey: 'user_id',
  });
  
Booking.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Booking};