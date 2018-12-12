'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.List);
  };
  return Item;
};
