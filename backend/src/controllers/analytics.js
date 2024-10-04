const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Comment = require("../models/comments");

router.get("/comments/", async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;

    const whereCondition = {};

    if (dateFrom) {
      whereCondition.createdAt = { [Op.gte]: new Date(dateFrom) };
    }

    if (dateTo) {
      if (whereCondition.createdAt) {
        whereCondition.createdAt[Op.lte] = new Date(dateTo);
      } else {
        whereCondition.createdAt = { [Op.lte]: new Date(dateTo) };
      }
    }

    const comments = await Comment.findAll({
      where: whereCondition,
      order: [["ArticleId", "ASC"]],
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;