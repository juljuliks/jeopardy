const router = require('express').Router();

const db = require('../db/models');
const { sequelize } = require('../db/models');

router.get('/', async (req, res) => {
  let stats;
  try {
    stats = await db.Game.findAll({
      attributes: [
        ['id', 'key'],
        'totalScore',
        [sequelize.literal('"User"."userName"'), 'username'],
      ],
      raw: true,
      include: { model: db.User },
      order: [['totalScore', 'DESC']],
    });
  } catch (e) {
    console.log(e);
  }
  res.json(stats);
});

router.get('/:userId', async (req, res) => {
  let stats;
  try {
    stats = await db.CategoryStat.findAll({
      attributes: [
        ['id', 'key'],
        'categoryScore',
        [sequelize.literal('"Category"."categoryName"'), 'categoryName'],
      ],
      raw: true,
      include: [{
        model: db.Game,
        where: { userId: req.params.userId },
      },
      { model: db.Category },
      ],
      limit: 6,
    });
  } catch (e) {
    console.log(e);
  }
  console.log(stats);
  res.json(stats);
});

module.exports = router;
