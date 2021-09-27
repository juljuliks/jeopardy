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

      {
        questionId: 16,
        choiceBody: 'Возводит в степень',
        isCorrect: true,
      },
      {
        questionId: 16,
        choiceBody: 'Умножает число само на себя',
      },
      {
        questionId: 16,
        choiceBody: 'Нет такого оператора',
      },

      {
        questionId: 17,
        choiceBody: 'Сравнивает по ссылке, а не по значению.',
      },
      {
        questionId: 17,
        choiceBody: 'Сравнивает без приведения типа',
        isCorrect: true,
      },
      {
        questionId: 17,
        choiceBody: 'Нет такого оператора',
      },

      {
        questionId: 18,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 18,
        choiceBody: 'Нет',
      },
      {
        questionId: 18,
        choiceBody: 'В первом выражении ошибка, что еще за «!!» ??',
      },

      {
        questionId: 19,
        choiceBody: '2',
      },
      {
        questionId: 19,
        choiceBody: '1',
      },
      {
        questionId: 19,
        choiceBody: 'null',
        isCorrect: true,
      },
      {
        questionId: 19,
        choiceBody: '0',
      },
      {
        questionId: 19,
        choiceBody: 'undefined',
      },

      {
        questionId: 20,
        choiceBody: '0',
      },
      {
        questionId: 20,
        choiceBody: '1',
      },
      {
        questionId: 20,
        choiceBody: '2',
      },
      {
        questionId: 20,
        choiceBody: '3',
        isCorrect: true,
      },
      {
        questionId: 20,
        choiceBody: 'true',
      },
      {
        questionId: 20,
        choiceBody: 'false',
      },

      {
        questionId: 21,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 21,
        choiceBody: 'Нет',
      },

      {
        questionId: 22,
        choiceBody: 'Ничем',
      },
      {
        questionId: 22,
        choiceBody: 'Function Declareation «поднимаются», а Function Expression – нет',
        isCorrect: true,
      },
      {
        questionId: 22,
        choiceBody: 'Function Expression «поднимаются», а Function Declareation – нет.',
      },

      {
        questionId: 23,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 23,
        choiceBody: 'Нет',
      },

      {
        questionId: 24,
        choiceBody: 'Масссив',
      },
      {
        questionId: 24,
        choiceBody: 'Объект',
        isCorrect: true,
      },
      {
        questionId: 24,
        choiceBody: 'Map',
      },
      {
        questionId: 24,
        choiceBody: 'Set',
      },

      {
        questionId: 25,
        choiceBody: 'Да',
      },
      {
        questionId: 25,
        choiceBody: 'Нет',
        isCorrect: true,
      },

      {
        questionId: 26,
        choiceBody: 'null',
      },
      {
        questionId: 26,
        choiceBody: 'объекты',
      },
      {
        questionId: 26,
        choiceBody: 'функции',
      },
      {
        questionId: 26,
        choiceBody: 'другие массивы',
      },
      {
        questionId: 26,
        choiceBody: 'все вышеперечисленное может хранится в массивах',
        isCorrect: true,
      },

      {
        questionId: 27,
        choiceBody: 'Да',
      },
      {
        questionId: 27,
        choiceBody: 'Нет',
        isCorrect: true,
      },

      {
        questionId: 28,
        choiceBody: '.map',
      },
      {
        questionId: 28,
        choiceBody: '.sort',
        isCorrect: true,
      },
      {
        questionId: 28,
        choiceBody: '.slice',
      },
      {
        questionId: 28,
        choiceBody: '.concat',
      },

      {
        questionId: 29,
        choiceBody: 'да. map возвращает новый массив, forЕach возвращает undefined',
        isCorrect: true,
      },
      {
        questionId: 29,
        choiceBody: 'нет. и map и foreach возвращает новый массив',
      },

      {
        questionId: 30,
        choiceBody: '.flat',
      },
      {
        questionId: 30,
        choiceBody: '.reduseRight',
      },
      {
        questionId: 30,
        choiceBody: '.flatMap',
      },
      {
        questionId: 30,
        choiceBody: '.entries',
      },
      {
        questionId: 30,
        choiceBody: 'Все вышеперечисленные методы сущеуствуют',
        isCorrect: true,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
