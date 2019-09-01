'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    locationID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    serviceID: DataTypes.INTEGER,
    languageID: DataTypes.INTEGER,
    guideID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    Job.hasMany(models.Guide, { onDelete: 'cascade' });
    Job.hasMany(models.User);
    Job.hasMany(models.Language);
    Job.hasMany(models.Service);
    Job.hasMany(models.Location);
  };
  return Job;
};