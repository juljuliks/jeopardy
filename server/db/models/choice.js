'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Choice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Question, { foreignKey: 'questionId' })
    }
  };
  Choice.init({
    questionId: DataTypes.INTEGER,
    choiceBody: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Choice',
  });
  return Choice;
};
