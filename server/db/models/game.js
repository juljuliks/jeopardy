'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CategoryStat, { foreignKey: 'gameId' });
      this.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Game.init({
    userId: DataTypes.INTEGER,
    totalScore: DataTypes.INTEGER,
    correctAnswers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
