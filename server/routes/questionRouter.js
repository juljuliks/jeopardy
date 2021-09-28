const router = require('express').Router();
const { Category, Question, Choice, sequelize, Game, CategoryStat } = require('../db/models');
const arr = [
  {
    categoryTitle: 'Blablablabla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
];

  const arr2 = [
    { answerId: 1, answerBody: 'bla bla 1', isCorrect: false },
    { answerId: 2, answerBody: 'bla bla 2', isCorrect: true },
    { answerId: 3, answerBody: 'bla bla 3', isCorrect: false },
    { answerId: 4, answerBody: 'bla bla 4', isCorrect: false },
  ];


router.get('/', async (req, res) => {
  try{
     const categories = await Category.findAll({ limit:3, raw: true });

      for await(const category of categories){
       const questions= await Question.findAll({where:{categoryId:category.id}, raw:true});
        category.questions = questions;
     }
res.json(categories)
  }catch(err){
    console.log(err);
    res.sendStatus(500).end();
  }
})

  router.get('/:id/choice', async (req, res) => {
    try{
      const {id} = req.params;
      console.log(id)
       const choices = await Choice.findAll({ where:{questionId:id} });
       res.json(choices)
    }catch(err){
      console.log(err);
      res.sendStatus(500).end();
    }
})

router.post('/game', async (req, res) => {
  try{
    const { totalScore, correctAnswers, arrOfPoints } = req.body;
    const userId = req.session.user.id;
    const newGame = await Game.create({userId, totalScore, correctAnswers})
    for await(let point of arrOfPoints){
      await CategoryStat.create({gameId:newGame.id, categoryId: point.category, categoryScore:point.pricePoint})
    }
    res.sendStatus(200).end();
  }catch(err){
    console.log(err);
    res.sendStatus(500).end();
  }
})


module.exports = router;
