'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guide_Known_Language = sequelize.define('Guide_Known_Language', {
    guideID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    languageID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, 
  { 
    timestamps: false 
  });
  Guide_Known_Language.associate = function(models) {

    Guide_Known_Language.belongsTo(models.Language, { foreignKey: 'languageID'});
    Guide_Known_Language.belongsTo(models.Guide, { foreignKey: 'guideID'});
  };
  return Guide_Known_Language;
};