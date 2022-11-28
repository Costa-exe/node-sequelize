const Sequelize = require('sequelize');

const sequelize = new Sequelize("classicmodels", "root", "Password01!", {
    host : 'database-classicmodels.cetsul63nyeq.eu-south-1.rds.amazonaws.com',
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
db.customers = require('../models/init-models')(sequelize, Sequelize);
module.exports = db;