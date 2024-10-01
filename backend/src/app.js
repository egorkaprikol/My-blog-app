const express = require('express');
const app = express();
const sequelize = require('./config/config.json');
const articleRouter = require("./controllers/articles.js")
const commentRouter = require("./controllers/comments.js")
const analyticRouter = require("./controllers/analytics.js")
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV || 'development';

var corsOptions = {
  origin: 'http://localhost:3000'
}


app.use(cors(corsOptions))
app.use(express.json());
app.use("/article", articleRouter);
app.use("/comment", commentRouter);
app.use("/analytic", analyticRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Сервер запущен в режиме ${MODE}`);
});