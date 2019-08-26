'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Job);
    User.belongsToMany(models.Guide, {through: 'Ratings', foreignKey:'userID'});
  };
  return User;
};