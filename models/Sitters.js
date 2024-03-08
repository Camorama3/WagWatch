const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Sitter extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Sitter.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,  
  },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activitylevelLow: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activitylevelMedium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activitylevelHigh: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
  {
    hooks: {
      beforeCreate: async (newSitterData) => {
        newSitterData.password = await bcrypt.hash(newSitterData.password, 10);
        return newSitterData;
      },
      beforeUpdate: async (updatedSitterData) => {
        updatedSitterData.password = await bcrypt.hash(updatedSitterData.password, 10);
        return updatedSitterData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Sitter',
  }
);

module.exports = Sitter;
