"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFactory = exports.Game = void 0;
const sequelize_1 = require("sequelize");
class Game extends sequelize_1.Model {
}
exports.Game = Game;
function GameFactory(sequelize) {
    return sequelize.define("games", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    });
}
exports.GameFactory = GameFactory;
