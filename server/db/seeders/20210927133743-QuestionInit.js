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
        questionBody: 'Чему равно: 1 + “5” - 2 ?',
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
        questionBody: 'Что вернет NaN === NaN?',
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
        questionBody: 'Что будет если внутри класса перед названием св-ва поставить решетку(#)?',
        pricePoint: 300,
      },
      {
        categoryId: 3,
        questionBody: 'Что произойдет если вызвать конструктор класса без оператора new?',
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

      {
        categoryId: 4,
        questionBody: 'Что делает оператор **?',
        pricePoint: 200,
      },
      {
        categoryId: 4,
        questionBody: 'Что делает оператор ===?',
        pricePoint: 300,
      },
      {
        categoryId: 4,
        questionBody: 'Есть ли разница между выражениями: !!( a && b ) и (a && b) ?',
        pricePoint: 400,
      },
      {
        categoryId: 4,
        questionBody: 'Чему равно 2 && 1 && null && 0 && undefined?',
        pricePoint: 500,
      },
      {
        categoryId: 4,
        questionBody: 'Чему равно 0 || 1 && 2 || 3?',
        pricePoint: 600,
      },

      {
        categoryId: 5,
        questionBody: 'Может ли название функции быть из 1 символа?',
        pricePoint: 200,
      },
      {
        categoryId: 5,
        questionBody: 'Чем отличается Function Expression (сonst foo() {}) от Function Declareation (function foo() {})?',
        pricePoint: 300,
      },
      {
        categoryId: 5,
        questionBody: 'Возможно ли сделать так, чтобы функция сама по себе (без внешних переменных или функций) хранила количество ее вызовов?',
        pricePoint: 400,
      },
      {
        categoryId: 5,
        questionBody: 'У функций arguments это - ?',
        pricePoint: 500,
      },
      {
        categoryId: 5,
        questionBody: 'Могут ли стрелочные функции быть конструкторами?',
        pricePoint: 600,
      },

      {
        categoryId: 6,
        questionBody: 'Что не может храниться в массивах?',
        pricePoint: 400,
      },
      {
        categoryId: 6,
        questionBody: 'Cвойсво length массивов является readonly, верно?',
        pricePoint: 200,
      },
      {
        categoryId: 6,
        questionBody: 'Какой из перечисленных методов мутирует массив?',
        pricePoint: 300,
      },
      {
        categoryId: 6,
        questionBody: 'Eсть ли разница между map и forEach',
        pricePoint: 500,
      },
      {
        categoryId: 6,
        questionBody: 'Какого из перечисленных методов массивов не существует?',
        pricePoint: 600,
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
