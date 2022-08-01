



const db =  require('../db/mySql');
const {DataTypes} = require('sequelize');

const users = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token:{
        type :DataTypes.TEXT,
        allowNull:true, 
    }
},
{
    timestamps: false
});


(async()=>{
   await db.sync();
})()

module.exports = users;