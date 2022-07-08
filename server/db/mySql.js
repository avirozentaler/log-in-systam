const dbConfig = require('../config/db')
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD);


module.exports = db;
