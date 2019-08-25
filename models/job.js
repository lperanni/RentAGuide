'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER,
    serviceID: DataTypes.INTEGER,
    languageID: DataTypes.INTEGER,
    guideID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    Job.hasOne(models.Guide);
    Job.hasOne(models.User);
    Job.hasOne(models.Language);
    Job.hasOne(models.Service);
  };
  return Job;
};