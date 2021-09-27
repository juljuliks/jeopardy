module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        categoryName: 'Базовый JS',
      },
      {
        categoryName: 'Типы данных',
      },
      {
        categoryName: 'Классы',
      },
      {
        categoryName: 'Операторы',
      },
      {
        categoryName: 'Функции',
      },
      {
        categoryName: 'Массивы',
      },
      {
        categoryName: 'Accинхронность',
      },
      {
        categoryName: 'Область видимости',
      },
      {
        categoryName: 'СSS',
      },
      {
        categoryName: 'DOM',
      },
      {
        categoryName: 'This',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
