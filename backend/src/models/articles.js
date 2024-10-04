const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection.js');
const Comment = require('./comments.js');

class Article extends Model {}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Article'
});
Article.hasMany(Comment, { onDelete: "CASCADE", hooks: true });

module.exports = Article;