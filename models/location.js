'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location_name: DataTypes.STRING
  }, {timestamps: false});
  Location.associate = function(models) {
    Location.belongsTo(models.Job);
  };
  return Location;
};