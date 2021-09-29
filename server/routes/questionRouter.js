/* eslint-disable no-restricted-syntax */
const router = require('express').Router();
const {
  Category, Question, Choice, sequelize, Game, CategoryStat,
} = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ order: sequelize.random(), limit: 6, raw: true });
    for await (const category of categories) {
      const questions = await Question.findAll({ where: { categoryId: category.id }, raw: true });
      category.questions = questions;
    }
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
});

router.get('/:id/choice', async (req, res) => {
  try {
    const { id } = req.params;
    const choices = await Choice.findAll({ where: { questionId: id } });
    res.json(choices);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
});

router.post('/game', async (req, res) => {
  try {
    const { totalScore, correctAnswers, arrOfPoints } = req.body;
    const userId = req.session.user.id;
    const newGame = await Game.create({ userId, totalScore, correctAnswers });
    for await (const point of arrOfPoints) {
      await CategoryStat.create(
        {
          gameId: newGame.id,
          categoryId: point.category,
          categoryScore: point.pricePoint,
        },
      );
    }
    res.sendStatus(200).end();
  } catch (err) {
    console.log(err);
    res.sendStatus(500).end();
  }
});

module.exports = router;
