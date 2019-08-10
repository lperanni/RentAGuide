'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    location: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    start_time: DataTypes.INTEGER,
    end_time: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    Job.belongsTo(models.Guide);
  };
  return Job;
};