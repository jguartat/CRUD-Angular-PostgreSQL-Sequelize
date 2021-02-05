import * as sequelize from "sequelize";
import {GameFactory} from "./game-model";

export const dbConfig = new sequelize.Sequelize(
    (process.env.DB_NAME = "ng_games_db"),
    (process.env.DB_USER = "postgres"),
    (process.env.DB_PASSWORD = "j0$u3p0$79r3$"),
    {
        //port: Number(process.env.DB_PORT) || 54320,
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

export const Game = GameFactory(dbConfig);
//export const Skills = skillsFactory(dbConfig);

//Para crear las relaciones entre tablas
//User.hasMay(Skills);

dbConfig.authenticate()
    .then(()=>console.log("Conectado a la base de datos"))
    .catch(()=>{
        throw "error";
    });

//if you want to create them tables
dbConfig
    .sync()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(() => {
        throw "error";
    });
