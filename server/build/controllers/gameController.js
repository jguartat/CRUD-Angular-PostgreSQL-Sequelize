"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameController = void 0;
const index_1 = require("../models/index");
class GameController {
    async list(req, res) {
        let games = await index_1.Game.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        console.log("All users:", JSON.stringify(games, null, 2));
        res.json(games);
    }
    async getOne(req, res) {
        let game = await index_1.Game.findOne({ where: { id: req.params.id } });
        //console.log("El juego:", JSON.stringify(game, null, 2));
        if (game === null) {
            res.status(404).json({ text: 'Juego no encontrado' });
        }
        else {
            res.json(game);
        }
    }
    async create(req, res) {
        //let game = Game.build({title:"Juego 2",description:"Descripcion del juego2", image:"la url de la imagen2"});
        //await game.save();
        //res.send('I am a Game');
        console.log(req.body);
        let game = index_1.Game.build(req.body);
        await game.save();
        res.json({ text: 'Juego guardado' });
    }
    async delete(req, res) {
        await index_1.Game.destroy({ where: { id: req.params.id } });
        res.json({ text: 'El juego con id: ' + req.params.id + ' ha sido borrado' });
    }
    async update(req, res) {
        await index_1.Game.update(req.body, { where: { id: req.params.id } });
        res.json({ text: 'El juego con id: ' + req.params.id + ' ha sido actualizado' });
    }
}
exports.gameController = new GameController();
