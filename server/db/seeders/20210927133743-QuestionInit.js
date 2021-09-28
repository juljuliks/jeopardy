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
        pricePoint: 200,
      },
      {
        categoryId: 6,
        questionBody: 'Cвойсво length массивов является readonly, верно?',
        pricePoint: 300,
      },
      {
        categoryId: 6,
        questionBody: 'Какой из перечисленных методов мутирует массив?',
        pricePoint: 400,
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

      {
        categoryId: 7,
        questionBody: 'Что возвращает метод Fetch?',
        pricePoint: 200,
      },
      {
        categoryId: 7,
        questionBody: 'Kакой метод позволяет указать функцию которая отработает когда промис будет выполнен вне зависимости успешно или с ошибкой?',
        pricePoint: 300,
      },
      {
        categoryId: 7,
        questionBody: 'Bнутри промиса уже был выполнен resolve. что произойдет при попытке внутри этого же выполнения промиса еще раз в коде попытаться вызвать resolve или reject?',
        pricePoint: 400,
      },
      {
        categoryId: 7,
        questionBody: 'Можно ли использовать ключевое слово await при объявлении for/of циклов?',
        pricePoint: 500,
      },
      {
        categoryId: 7,
        questionBody: 'Mожно ли использовать await внутри функций объявленных без async?',
        pricePoint: 600,
      },

      {
        categoryId: 8,
        questionBody: 'В чем отличие между локальной и глобальной переменной?',
        pricePoint: 200,
      },
      {
        categoryId: 8,
        questionBody: 'Какое ключевое слово создает переменные, область видимости которых не ограничивается блоками?',
        pricePoint: 300,
      },
      {
        categoryId: 8,
        questionBody: 'Если переменная объявленна внутри функции с помощью ключевого слова var может ли она быть доступна снаружи этой функции?',
        pricePoint: 400,
      },
      {
        categoryId: 8,
        questionBody: 'Что будет выведено в консоль : for (var i = 0; i < 10; i++){}; console.log(i) ?',
        pricePoint: 500,
      },
      {
        categoryId: 8,
        questionBody: 'Выберите неверное утверждение о let и const:',
        pricePoint: 600,
      },

      {
        categoryId: 9,
        questionBody: 'Возможно ли вертикально отцентрировать статический элемент с помощью margin:auto?',
        pricePoint: 200,
      },
      {
        categoryId: 9,
        questionBody: 'С помощью какой пары свойство:значение можно без js сверстать хедер, который при скролле “цепляется” за край экрана?',
        pricePoint: 300,
      },
      {
        categoryId: 9,
        questionBody: 'Какое правило позволяет загрузить шрифт для отображения текста',
        pricePoint: 400,
      },
      {
        categoryId: 9,
        questionBody: 'Перед значением какого под-свойства в сокращенном свойстве background должен стоять символ "/"?',
        pricePoint: 500,
      },
      {
        categoryId: 9,
        questionBody: 'Функции contrast() и blur() используются в свойстве…',
        pricePoint: 600,
      },

      {
        categoryId: 10,
        questionBody: 'Если селектору, переданному в querySelector cooтветсвует несколько элементов, что этот метод вернет?',
        pricePoint: 200,
      },
      {
        categoryId: 10,
        questionBody: 'Mетод Node.appendChild добавялет узел:',
        pricePoint: 300,
      },
      {
        categoryId: 10,
        questionBody: 'Cвойство Node.parentElement: ',
        pricePoint: 400,
      },
      {
        categoryId: 10,
        questionBody: 'Как проверить, был ли использован Event.preventDefault()?',
        pricePoint: 500,
      },
      {
        categoryId: 10,
        questionBody: 'Вызов setInterval(func, 100) вызовет func…',
        pricePoint: 600,
      },

      {
        categoryId: 11,
        questionBody: 'Hа что ссылается this в метода объекта если метод вызван напрямую, т.е obj.method?',
        pricePoint: 200,
      },
      {
        categoryId: 11,
        questionBody: 'У каких функций нет this?',
        pricePoint: 300,
      },
      {
        categoryId: 11,
        questionBody: 'Kакое утверждение не верно?',
        pricePoint: 400,
      },
      {
        categoryId: 11,
        questionBody: 'Чему равняется this вне объектов, методов и функций и прочего в строгом режиме?',
        pricePoint: 500,
      },
      {
        categoryId: 11,
        questionBody: 'Возможно ли использовать метод .bind для привязки this для стрелочной функции?',
        pricePoint: 600,
      },

      {
        categoryId: 12,
        questionBody: 'Какую часть шаблона проектирования MVC реализует React.js?',
        pricePoint: 200,
      },
      {
        categoryId: 12,
        questionBody: 'Перерисовывает ли React всё view когда изминелись props или состояние?',
        pricePoint: 300,
      },
      {
        categoryId: 12,
        questionBody: 'Какой атрибут обязателен при рендеринге компонентов списка?',
        pricePoint: 400,
      },
      {
        categoryId: 12,
        questionBody: 'Что такое подъем состояния вверх?',
        pricePoint: 500,
      },
      {
        categoryId: 12,
        questionBody: 'Что такое props.children?',
        pricePoint: 600,
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
