const Sequelize = require('sequelize');
const sequelize = new Sequelize("sakila", "root", "Snake.1234", {
    host : '127.0.0.1',
    dialect : mysql,
    operatorsAliases : false,

    pool: {
        max: 5,     
        min: 0,     
        idle: 10000
    }
});