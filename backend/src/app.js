const express = require('express');
const app = express();
const sequelize = require('./config/db_connection.js');
const articleRouter = require("./controllers/articles.js")
const commentRouter = require("./controllers/comments.js")

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/article", articleRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});