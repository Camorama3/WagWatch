const User = require('./User');
const Booking = require('./Booking');

User.hasMany(Booking, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Booking.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Booking};