'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    guideID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    rating: DataTypes.INTEGER
    
  }, {timestamps:false});
  Rating.associate = function(models) {

    Rating.belongsTo(models.User);
    Rating.belongsTo(models.Guide);
  };
  return Rating;
};