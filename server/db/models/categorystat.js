const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryStat extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsTo(models.Game, { foreignKey: 'gameId' });
    }
  }
  CategoryStat.init({
    gameId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    categoryScore: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'CategoryStat',
    timestamps: false,
  });
  return CategoryStat;
};
