const router = require('express').Router();
const { Category, Question, Choice, sequelize } = require('../db/models');
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
     const categories = await Category.findAll({ include: Question, order: sequelize.random(), limit: 3, raw: true });
     if(categories.length>0){
       console.log(categories)
       return res.json(categories)
     }
  return res.json(arr)
  }catch(err){
    console.log(err);
    res.sendStatus(500).end();
  }
})

  router.get('/:id/choice', async (req, res) => {
    try{
      const {id} = req.params;
       const choices = await Choice.findAll({ where:{questionId:id} });
       if(choices.length>0){
         return res.json(choices)
       }
    return res.json(arr2)
    }catch(err){
      console.log(err);
      res.sendStatus(500).end();
    }
})


module.exports = router;
