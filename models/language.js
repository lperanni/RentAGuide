'use strict';
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    language_name: DataTypes.STRING
  }, {timestamos: false});
  Language.associate = function(models) {
    Language.belongsTo(models.Job);
    Language.belongsToMany(models.Guide, {through:'guide_known_languages', foreignKey:'languageID'});
  };
  return Language;
};