'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.hasMany(models.Choice, { foreignKey: 'questionId' });
    }
  };
  Question.init({
    categoryId: DataTypes.INTEGER,
    questionBody: DataTypes.TEXT,
    correctAnswer: DataTypes.TEXT,
    pricePoint: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
