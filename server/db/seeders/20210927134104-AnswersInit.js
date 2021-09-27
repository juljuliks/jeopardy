module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Choices', [
      {
        questionId: 1,
        choiceBody: 'Да',
      },
      {
        questionId: 1,
        choiceBody: 'Нет',
        isCorrect: true,
      },
      {
        questionId: 1,
        choiceBody: 'Наоборот, Java – подвид JavaScript.',
      },
      {
        questionId: 2,
        choiceBody: 'truefalse',
      },
      {
        questionId: 2,
        choiceBody: '0',
      }, {
        questionId: 2,
        choiceBody: '1',
        isCorrect: true,
      }, {
        questionId: 2,
        choiceBody: 'NaN',
      },
      {
        questionId: 3,
        choiceBody: 'truefalse',
      },
      {
        questionId: 3,
        choiceBody: 'Ровно столько, сколько указано в определении функции.',
      },
      {
        questionId: 3,
        choiceBody: 'Сколько указано в определении функции или меньше',
      },
      {
        questionId: 3,
        choiceBody: 'Сколько указано в определении функции или больше',
      },
      {
        questionId: 3,
        choiceBody: 'Любое количество',
        isCorrect: true,
      },

      {
        questionId: 4,
        choiceBody: '*',
      },
      {
        questionId: 4,
        choiceBody: '^',
      },
      {
        questionId: 4,
        choiceBody: '%',
      },
      {
        questionId: 4,
        choiceBody: '#',
        isCorrect: true,
      },
      {
        questionId: 4,
        choiceBody: '&',
      },
      {
        questionId: 4,
        choiceBody: '>>',
      },
      {
        questionId: 4,
        choiceBody: '!',
      },

      {
        questionId: 5,
        choiceBody: 'for, forMap, foreach, while',
      },
      {
        questionId: 5,
        choiceBody: 'for, forMap, foreach, while, do while',
      },
      {
        questionId: 5,
        choiceBody: 'for, while, do while, foreach',
      },
      {
        questionId: 5,
        choiceBody: 'for, while, do while',
        isCorrect: true,
      },

      {
        questionId: 6,
        choiceBody: 'NaN',
      },
      {
        questionId: 6,
        choiceBody: '13',
        isCorrect: true,
      },
      {
        questionId: 6,
        choiceBody: '4',
      },
      {
        questionId: 7,
        choiceBody: 'Infinity',
        isCorrect: true,
      }, {
        questionId: 7,
        choiceBody: '0',
      }, {
        questionId: 7,
        choiceBody: 'NaN',
      }, {
        questionId: 7,
        choiceBody: 'Будет ошибка',
      },
      {
        questionId: 8,
        choiceBody: 'Да',
        isCorrect: true,
      }, {
        questionId: 8,
        choiceBody: 'Нет',
      },
      {
        questionId: 9,
        choiceBody: 'true',
      }, {
        questionId: 9,
        choiceBody: 'false',
        isCorrect: true,
      },
      {
        questionId: 10,
        choiceBody: 'Строке',
      },
      {
        questionId: 10,
        choiceBody: 'Цифре',
        isCorrect: true,
      },
      {
        questionId: 10,
        choiceBody: 'NaN',
      },

      {
        questionId: 11,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 11,
        choiceBody: 'Нет',
      },

      {
        questionId: 12,
        choiceBody: 'свойство станет недоступно из методов этого же класса',
      },
      {
        questionId: 12,
        choiceBody: 'свойство станет недоступным снаружи класса',
        isCorrect: true,
      },
      {
        questionId: 12,
        choiceBody: 'решетка будет проигнорирована',
      }, {
        questionId: 12,
        choiceBody: 'произойдет ошибка',
      },

      {
        questionId: 13,
        choiceBody: 'будет создан и возвращен экземпляр класса',
      },
      {
        questionId: 13,
        choiceBody: 'undefined',
        isCorrect: true,
      },
      {
        questionId: 13,
        choiceBody: 'произойдет ошибка',
      },

      {
        questionId: 14,
        choiceBody: 'drink.taste()',
      },
      {
        questionId: 14,
        choiceBody: 'taste.drink',
      },
      {
        questionId: 14,
        choiceBody: 'drink.taste',
        isCorrect: true,
      },
      {
        questionId: 14,
        choiceBody: 'первый и третий варианты ответа',
      },

      {
        questionId: 15,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 15,
        choiceBody: 'Нет',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
