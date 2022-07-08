require('../.env').config();

module.exports ={
    HOST: process.env.HOST,
    USER: process.env.DB_USER,
    PASSWORD:process.env.DB_PASSWORD,
    DB:process.env.DB_DB,
    DIALECT:process.env.DB_DIALECT
}

