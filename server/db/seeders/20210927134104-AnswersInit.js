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
        choiceBody: 'Произойдет ошибка',
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
        choiceBody: 'Свойство станет недоступно из методов этого же класса',
      },
      {
        questionId: 12,
        choiceBody: 'Свойство станет недоступным снаружи класса',
        isCorrect: true,
      },
      {
        questionId: 12,
        choiceBody: 'Решетка будет проигнорирована',
      }, {
        questionId: 12,
        choiceBody: 'Произойдет ошибка',
      },

      {
        questionId: 13,
        choiceBody: 'Будет создан и возвращен экземпляр класса',
      },
      {
        questionId: 13,
        choiceBody: 'undefined',
        isCorrect: true,
      },
      {
        questionId: 13,
        choiceBody: 'Произойдет ошибка',
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
        choiceBody: 'Первый и третий варианты ответа',
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
        choiceBody: 'Oбъекты',
      },
      {
        questionId: 26,
        choiceBody: 'Функции',
      },
      {
        questionId: 26,
        choiceBody: 'Другие массивы',
      },
      {
        questionId: 26,
        choiceBody: 'Все вышеперечисленное может хранится в массивах',
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
        choiceBody: 'Да. map возвращает новый массив, forЕach возвращает undefined',
        isCorrect: true,
      },
      {
        questionId: 29,
        choiceBody: 'Нет. и map и foreach возвращает новый массив',
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

      {
        questionId: 31,
        choiceBody: 'Массив',
      },
      {
        questionId: 31,
        choiceBody: 'Promise',
        isCorrect: true,
      },
      {
        questionId: 31,
        choiceBody: 'Объект',
      },
      {
        questionId: 31,
        choiceBody: 'Функцию',
      },

      {
        questionId: 32,
        choiceBody: 'Promise.prototype.after()',
      },
      {
        questionId: 32,
        choiceBody: 'Promise.prototype.result()',
        isCorrect: true,
      },
      {
        questionId: 32,
        choiceBody: 'Promise.prototype.finish()',
      },
      {
        questionId: 32,
        choiceBody: 'Promise.prototype.finally()',
        isCorrect: true,
      },

      {
        questionId: 33,
        choiceBody: 'Resolve выполнится, reject нет',
      },
      {
        questionId: 33,
        choiceBody: 'Reject выполнится, resolve нет',
        isCorrect: true,
      },
      {
        questionId: 33,
        choiceBody: 'И reject, и resolve выполнится',
      },
      {
        questionId: 33,
        choiceBody: 'Reject, и resolve не выполнится',
        isCorrect: true,
      },

      {
        questionId: 34,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 34,
        choiceBody: 'Нет',
      },

      {
        questionId: 35,
        choiceBody: 'Да',
        isCorrect: true,
      },
      {
        questionId: 35,
        choiceBody: 'Нет',
      },

      {
        questionId: 36,
        choiceBody: 'Отличий нет',
      },
      {
        questionId: 36,
        choiceBody: 'Локальные видны повсюду, глобальные только в функциях',
      },
      {
        questionId: 36,
        choiceBody: 'Глобальные можно переопределять, локальные нельзя',
      },
      {
        questionId: 36,
        choiceBody: 'Локальные можно переопределять, глобальные нельзя',
      },
      {
        questionId: 36,
        choiceBody: 'Глобальные видны повсюду, локальные только в функциях',
        isCorrect: true,
      },

      {
        questionId: 37,
        choiceBody: 'Var',
        isCorrect: true,
      },
      {
        questionId: 37,
        choiceBody: 'Let',
      },
      {
        questionId: 37,
        choiceBody: 'Const',
      },

      {
        questionId: 38,
        choiceBody: 'Да',
      },
      {
        questionId: 38,
        choiceBody: 'Нет',
        isCorrect: true,
      },

      {
        questionId: 39,
        choiceBody: 'undefined',
      },
      {
        questionId: 39,
        choiceBody: '10',
        isCorrect: true,
      },
      {
        questionId: 39,
        choiceBody: 'Произойдет ошибка',
      },

      {
        questionId: 40,
        choiceBody: 'Имеют блочную область видимости',
      },
      {
        questionId: 40,
        choiceBody: 'Не "поднимаются"',
        isCorrect: true,
      },
      {
        questionId: 40,
        choiceBody: 'Появились в стандарте ES6',
      },
      {
        questionId: 40,
        choiceBody: 'Все утверждения верны',
      },

      {
        questionId: 41,
        choiceBody: 'Да',
      },
      {
        questionId: 41,
        choiceBody: 'Нет',
        isCorrect: true,
      },

      {
        questionId: 42,
        choiceBody: 'position: sticky',
        isCorrect: true,
      },
      {
        questionId: 42,
        choiceBody: 'position: fixed',
      },
      {
        questionId: 42,
        choiceBody: 'stick: true',
      },
      {
        questionId: 42,
        choiceBody: 'stickness: top',
      },

      {
        questionId: 43,
        choiceBody: '@font',
      },
      {
        questionId: 43,
        choiceBody: '@font-face',
        isCorrect: true,
      },
      {
        questionId: 43,
        choiceBody: '@mixin',
      },
      {
        questionId: 43,
        choiceBody: '@font-display',
      },

      {
        questionId: 44,
        choiceBody: '<background-color>',
      },
      {
        questionId: 44,
        choiceBody: '<bg-image>',
      },
      {
        questionId: 44,
        choiceBody: '<position>',
      },
      {
        questionId: 44,
        choiceBody: '<repeat-style>',
      },
      {
        questionId: 44,
        choiceBody: '<bg-size>',
        isCorrect: true,
      },

      {
        questionId: 45,
        choiceBody: 'change',
      },
      {
        questionId: 45,
        choiceBody: 'brightness',
      },
      {
        questionId: 45,
        choiceBody: 'transform',
      },
      {
        questionId: 45,
        choiceBody: 'filter',
        isCorrect: true,
      },

      {
        questionId: 46,
        choiceBody: 'Nodelist, содержащий все соответствующие элементы',
      },
      {
        questionId: 46,
        choiceBody: 'Первый из соотвeтствующих элементов',
        isCorrect: true,
      },
      {
        questionId: 46,
        choiceBody: 'Последний из соответствующих элементов',
      },
      {
        questionId: 46,
        choiceBody: 'null',
      },

      {
        questionId: 47,
        choiceBody: 'В конец списка дочерних элементов указанного узла',
        isCorrect: true,
      },
      {
        questionId: 47,
        choiceBody: 'В начало списка дочерних элементов указанного узла',
      },
      {
        questionId: 47,
        choiceBody: 'Сразу после указанного узла',
      },
      {
        questionId: 47,
        choiceBody: 'Сразу перед указанным узлом',
      },

      {
        questionId: 48,
        choiceBody: 'Возвращает либо Dom.element либо undefined',
      },
      {
        questionId: 48,
        choiceBody: 'Возвращает либо Dom.element либо null',
        isCorrect: true,
      },
      {
        questionId: 48,
        choiceBody: 'Всегда возвращает Dom.element',
      },
      {
        questionId: 48,
        choiceBody: 'Такого св-ва не сущесвует',
      },

      {
        questionId: 49,
        choiceBody: 'Проверить Event.defaultPrevented',
        isCorrect: true,
      },
      {
        questionId: 49,
        choiceBody: 'Проверить Event.prevented',
      },
      {
        questionId: 49,
        choiceBody: 'Это невозможно вычислить',
      },

      {
        questionId: 50,
        choiceBody: 'Ровно каждые 100мс',
      },
      {
        questionId: 50,
        choiceBody: 'Примерно каждые 100мс',
      },
      {
        questionId: 50,
        choiceBody: 'Обычно каждые 100мс, но возможно, вызовы будут происходить реже',
        isCorrect: true,
      },

      {
        questionId: 51,
        choiceBody: 'Hа сам объект',
        isCorrect: true,
      },
      {
        questionId: 51,
        choiceBody: 'Hа массив аргументов метода',
      },
      {
        questionId: 51,
        choiceBody: 'Hа глобальную переменную document',
        isCorrect: true,
      },

      {
        questionId: 52,
        choiceBody: 'Функций-колбэков',
      },
      {
        questionId: 52,
        choiceBody: 'Стрелочных функицй',
        isCorrect: true,
      },
      {
        questionId: 52,
        choiceBody: 'функций вида "Function Definition Statement"',
      },
      {
        questionId: 52,
        choiceBody: 'функций вида "Function Expression Statment"',
      },

      {
        questionId: 53,
        choiceBody: 'this является фиксированным значением',
        isCorrect: true,
      },
      {
        questionId: 53,
        choiceBody: 'this вычисляется во время выполнения кода',
      },
      {
        questionId: 53,
        choiceBody: 'this зависит от контекста',
      },
      {
        questionId: 53,
        choiceBody: 'в строгом режиме this == undefined',
      },

      {
        questionId: 54,
        choiceBody: 'Глобальному объекту (window)',
        isCorrect: true,
      },
      {
        questionId: 54,
        choiceBody: 'document',
      },
      {
        questionId: 54,
        choiceBody: 'undefined',
      },
      {
        questionId: 54,
        choiceBody: 'null',
      },
      {
        questionId: 54,
        choiceBody: 'Hичему, произойдет ошибка',
      },

      {
        questionId: 55,
        choiceBody: 'Да',
      },
      {
        questionId: 55,
        choiceBody: 'Нет',
        isCorrect: true,
      },

      {
        questionId: 56,
        choiceBody: 'React - это полноценный MVC-фреймворк',
      },
      {
        questionId: 56,
        choiceBody: 'React предназначен для работы с "view" частью',
        isCorrect: true,
      },
      {
        questionId: 56,
        choiceBody: 'React является «контроллером» с точки зрения MVC',
      },

      {
        questionId: 57,
        choiceBody: 'Да. React распространяет событие на дерево компонентов, и они вызывают render.',
      },
      {
        questionId: 57,
        choiceBody: 'Нет. React только повторно рендерит только измененный компонент.',
        isCorrect: true,
      },

      {
        questionId: 58,
        choiceBody: 'key',
        isCorrect: true,
      },
      {
        questionId: 58,
        choiceBody: 'index',
      },
      {
        questionId: 58,
        choiceBody: 'data-index',
      },
      {
        questionId: 58,
        choiceBody: 'id',
      },

      {
        questionId: 59,
        choiceBody: 'Обновление props родительского элемента',
      },
      {
        questionId: 59,
        choiceBody: 'Процесс подъема состояния изменившегося компонента до ближайшего общего предка',
        isCorrect: true,
      },
      {
        questionId: 59,
        choiceBody: 'Обновление состояния дочерних компонентов',
      },

      {
        questionId: 60,
        choiceBody: 'Xранилище ключ-значение всех props, переданных дочерним компонентам.',
      },
      {
        questionId: 60,
        choiceBody: 'Переменная, которая содержит ссылки на дочерние компоненты.',
      },
      {
        questionId: 60,
        choiceBody: 'Переменная, в которой содержимое между < и /> компонента.',
        isCorrect: true,
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
