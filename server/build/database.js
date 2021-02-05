"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbseq = new sequelize_1.Sequelize('ng_games_db', 'postgres', 'j0$u3p0$79r3$', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    },
});
dbseq.authenticate()
    .then(() => console.log("connected to db"))
    .catch(() => {
    throw "error";
});
