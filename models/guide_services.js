'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide_Service = sequelize.define('Guide_Service', {
    guideID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    price: DataTypes.INTEGER
    
  }, {timestamps:false});
  Guide_Service.associate = function(models) {

    Guide_Service.belongsTo(models.User);
    Guide_Service.belongsTo(models.Guide);
  };
  return Guide_Service;
};