'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define('Guide', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    joined: DataTypes.DATE,
    password: DataTypes.STRING,
    full_name: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.getDataValue('first_name') + ' ' + this.getDataValue('last_name')
      }
    }
  }, {timestamps:false});
  Guide.associate = function(models) {

    Guide.belongsToMany(models.Service, {through: 'Guide_Services', foreignKey: 'guideID'});
    Guide.belongsTo(models.Job);
    Guide.belongsToMany(models.Language, {through: 'Guide_Known_Languages', foreignKey: 'guideID'});
    Guide.belongsToMany(models.User, {through: 'Ratings', 'foreignKey':'guideID'});
  };
  return Guide;
};