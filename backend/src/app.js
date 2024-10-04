const express = require("express");
const cors = require("cors");

const app = express();
const articleRouter = require("./controllers/articles.js");
const commentRouter = require("./controllers/comments.js");
const analyticRouter = require("./controllers/analytics.js");

const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV || "development";

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
  })
);

app.use(express.json());
app.use("/article", articleRouter);
app.use("/article", commentRouter);
app.use("/analytic", analyticRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Сервер запущен в режиме ${MODE}`);
});