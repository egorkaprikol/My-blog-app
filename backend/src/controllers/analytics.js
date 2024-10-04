const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Comment = require("../models/comments");

router.get("/comments/", async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;
    if (!dateFrom || !dateTo) {
      const all_comments = await Comment.findAll();
      res.json(all_comments);
    } else {
      const comments = await Comment.findAll({
        where: {
          createdAt: {
            [Op.between]: [dateFrom, dateTo],
          },
        },
        group: ["ArticleId", "id"],
      });

      res.json(comments);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
