const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Choice extends Model {
    static associate(models) {
      this.belongsTo(models.Question, { foreignKey: 'questionId' });
    }
  }
  Choice.init({
    questionId: DataTypes.INTEGER,
    choiceBody: DataTypes.TEXT,
    isCorrect: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Choice',
    timestamps: false,
  });
  return Choice;
};
