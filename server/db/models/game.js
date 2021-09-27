const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.hasMany(models.CategoryStat, { foreignKey: 'gameId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Game.init({
    userId: DataTypes.INTEGER,
    totalScore: DataTypes.INTEGER,
    correctAnswers: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Game',

  });
  return Game;
};
