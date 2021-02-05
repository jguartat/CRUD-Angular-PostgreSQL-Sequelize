"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const config_json_1 = __importDefault(require("./config.json"));
class Models {
    constructor() {
        this.config();
    }
    createDB() {
    }
    config() {
        let cnfg = config_json_1.default.development.cnx;
        this.cnfg = cnfg;
    }
}
exports.model = new Models();
