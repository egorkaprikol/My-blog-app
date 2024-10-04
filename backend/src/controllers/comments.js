const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");
const Article = require("../models/articles");

router.post("/:articleId/comment", async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      ArticleId: req.params.articleId,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:articleId/comment/:commentId", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.articleId);
    if (!article) {
      return res.status(404).json({ error: "Статья не найдена" });
    }

    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        ArticleId: req.params.articleId,
      },
    });

    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ error: "Комментарий не найден" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:articleId/comment", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { ArticleId: req.params.articleId },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:articleId/comment/:commentId", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.articleId);
    if (!article) {
      return res.status(404).json({ error: "Статья не найдена" });
    }
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        ArticleId: req.params.articleId,
      },
    });
    if (comment) {
      await comment.update(req.body);
      res.json(comment);
    } else {
      res.status(404).json({ error: "Комментарий не найден" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:articleId/comment/:commentId", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.articleId);

    if (!article) {
      return res.status(404).json({ error: "Статья не найдена" });
    }

    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
        ArticleId: req.params.articleId,
      },
    });

    if (comment) {
      await comment.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Комментарий не найден" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
