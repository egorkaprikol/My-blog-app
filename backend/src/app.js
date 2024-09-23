const express = require('express');
const app = express();
const sequelize = require('./config/db_connection.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });
});