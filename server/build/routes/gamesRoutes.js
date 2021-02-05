"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gameController_1.gameController.list);
        this.router.get('/:id', gameController_1.gameController.getOne);
        this.router.post('/', gameController_1.gameController.create);
        this.router.delete('/:id', gameController_1.gameController.delete);
        this.router.put('/:id', gameController_1.gameController.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
