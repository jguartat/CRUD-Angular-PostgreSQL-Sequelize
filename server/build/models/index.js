"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.dbConfig = void 0;
const sequelize = __importStar(require("sequelize"));
const game_model_1 = require("./game-model");
exports.dbConfig = new sequelize.Sequelize((process.env.DB_NAME = "ng_games_db"), (process.env.DB_USER = "postgres"), (process.env.DB_PASSWORD = "j0$u3p0$79r3$"), {
    //port: Number(process.env.DB_PORT) || 54320,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000,
    },
});
exports.Game = game_model_1.GameFactory(exports.dbConfig);
//export const Skills = skillsFactory(dbConfig);
//Para crear las relaciones entre tablas
//User.hasMay(Skills);
exports.dbConfig.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(() => {
    throw "error";
});
//if you want to create them tables
exports.dbConfig
    .sync()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(() => {
    throw "error";
});
