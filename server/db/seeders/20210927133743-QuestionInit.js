module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        categoryId: 1,
        questionBody: 'Язык JavaScript является подвидом языка Java – верно?',
        pricePoint: 200,
      },
      {
        categoryId: 1,
        questionBody: 'Что получится, если сложить true + false?',
        pricePoint: 300,
      },
      {
        categoryId: 1,
        questionBody: 'Сколько параметров можно передать функции?',
        pricePoint: 400,
      },
      {
        categoryId: 1,
        questionBody: 'Какого операторa из этого списка нет в javascript?',
        pricePoint: 500,
      },
      {
        categoryId: 1,
        questionBody: 'Какие циклы есть в языке JavaScript?',
        pricePoint: 600,
      },

      {
        categoryId: 2,
        questionBody: 'чему равно: 1 + “5” - 2',
        pricePoint: 200,
      },
      {
        categoryId: 2,
        questionBody: 'Что выведет этот код? alert( +"Infinity" );',
        pricePoint: 300,
      },
      {
        categoryId: 2,
        questionBody: 'Верно ли, что null == undefined?',
        pricePoint: 400,
      },
      {
        categoryId: 2,
        questionBody: 'что вернет NaN === NaN',
        pricePoint: 500,
      },
      {
        categoryId: 2,
        questionBody: 'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?',
        pricePoint: 600,
      },

      {
        categoryId: 3,
        questionBody: 'Объявлена функция: function F() {} Верно ли, что F instanceof Function?',
        pricePoint: 200,
      },
      {
        categoryId: 3,
        questionBody: 'Что будет если внутри класса перед названием св-ва поставить решетку(#)',
        pricePoint: 300,
      },
      {
        categoryId: 3,
        questionBody: 'Что произойдет если вызвать конструктор класса без оператора new',
        pricePoint: 400,
      },
      {
        categoryId: 3,
        questionBody: 'У объекта drink имеется геттер taste. как получить его значение(вызвать)?',
        pricePoint: 500,
      },
      {
        categoryId: 3,
        questionBody: 'Возможно ли наследование от встроенных классов?',
        pricePoint: 600,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
