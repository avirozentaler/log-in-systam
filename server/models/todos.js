

const db =  require('../db/mySql');
const {DataTypes} = require('sequelize');

const todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    task: {
        type: DataTypes.STRING
    },
    isCompleted: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});

module.exports = todos;