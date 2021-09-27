const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Question, { foreignKey: 'categoryId' });
      this.hasMany(models.CategoryStat, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    categoryName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Category',
    timestamps: false,
  });
  return Category;
};
