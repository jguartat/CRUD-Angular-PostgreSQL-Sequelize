import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface GameAttributes{
    id?: number;
    title: string;
    description: string;
    image: string;
    created_at?: Date;
}

export interface GameModel extends Model<GameAttributes>, GameAttributes{}
export class Game extends Model<GameModel, GameAttributes>{}

export type GameStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): GameModel;
};

export function GameFactory (sequelize: Sequelize): GameStatic{
    return <GameStatic>sequelize.define("games",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    })
}