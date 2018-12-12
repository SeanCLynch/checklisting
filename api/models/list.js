'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    title: DataTypes.STRING
  }, {});
  List.associate = function(models) {
    // associations can be defined here
    List.hasMany(models.Item);
  };
  return List;
};
