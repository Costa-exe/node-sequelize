const Sequelize = require('sequelize');

const sequelize = new Sequelize("sakila", "root", "Snake.1234", {
    host : '127.0.0.1',
    dialect : 'mysql',
    operatorsAliases : 0,

    pool: {
        max: 5,     
        min: 0,     
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('./init-models')(sequelize, Sequelize);
module.exports = db;