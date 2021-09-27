'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryStat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' })
      this.belongsTo(models.Game, { foreignKey: 'gameId' })
    }
  };
  CategoryStat.init({
    gameId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    categoryScore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryStat',
  });
  return CategoryStat;
};
