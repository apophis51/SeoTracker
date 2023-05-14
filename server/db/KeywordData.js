const Sequelize = require('sequelize')
const db = require('./db')

const KeywordData = db.define('KeywordData', {
  Keyword: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  'SERP features': {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Volume: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  KD: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  CPC: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  'Previous organic traffic': {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  'Current organic traffic': {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  'Organic traffic change': {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  'Current paid traffic': {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  "Previous position": {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  "Current position": {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  "Position change": {
    type: Sequelize.STRING,
    allowNull: true,
  },
  'Previous URL': {
    type: Sequelize.STRING,
    allowNull: true,
  },
  'Current URL': {
    type: Sequelize.STRING,
    allowNull: true,
  },
  'Previous date': {
    type: Sequelize.DATEONLY,
    allowNull: true,
    
  },
  'Current date': {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  

  // Additional options for the model
});

// Create the table if it doesn't exist


module.exports = KeywordData;
