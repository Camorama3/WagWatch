const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    booking_location: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    booking_date: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    booking_duration: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    booking_description: {
      type: DataTypes.TEXT,
      allowNull: false  
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Booking',
  }
);

module.exports = Booking;
