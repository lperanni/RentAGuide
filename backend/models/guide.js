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
  Guide.associate = (models) => {
    Guide.belongsToMany(models.service, {
      through: 'guide_services',
      as: 'Service',
      foreignKey: 'guideId'
    });
    Guide.belongsToMany(models.language, {
      through: 'guide_known_languages',
      as: 'Language',
      foreignKey: 'guideId'
    });
  };
  return Guide;
};