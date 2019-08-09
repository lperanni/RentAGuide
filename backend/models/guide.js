'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define('Guide', {
    firstname: {
      type: DataTypes.STRING,
      AllowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      AllowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 150]
      }
    },
    telephone: DataTypes.TEXT
  }, {});
  Guide.associate = function(models) {
    // associations can be defined here
  };
  return Guide;
};