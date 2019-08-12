'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    service_name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    timestamps: false
  });
  Service.associate = function(models) {
    Service.belongsToMany(models.Guide, { through: 'guide_services', foreignKey:'serviceID' });
    Service.belongsTo(models.Job);
  };
  return Service;
};