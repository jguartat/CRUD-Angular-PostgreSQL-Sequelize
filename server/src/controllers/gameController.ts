import {Request,Response} from 'express';
import {Game} from '../models/index'

class GameController{
    public async list(req:Request,res:Response){
        let games = await Game.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] }
        });
        console.log("All users:", JSON.stringify(games, null, 2));
        res.json(games);
    }
    public async getOne(req:Request,res:Response){
        let game = await Game.findOne({where:{id:req.params.id}})
        //console.log("El juego:", JSON.stringify(game, null, 2));
        if(game===null){
            res.status(404).json({text:'Juego no encontrado'});
        }else{
            res.json(game);
        }
    }
    public async create(req:Request,res:Response):Promise <void>{
        //let game = Game.build({title:"Juego 2",description:"Descripcion del juego2", image:"la url de la imagen2"});
        //await game.save();
        //res.send('I am a Game');
        console.log(req.body);
        let game = Game.build(req.body);
        await game.save();
        res.json({text:'Juego guardado'});
    }
    public async delete(req:Request,res:Response):Promise <void>{
        await Game.destroy({where:{id:req.params.id}})
        res.json({text:'El juego con id: '+req.params.id+' ha sido borrado'})
    }
    public async update(req:Request, res:Response):Promise <void>{
        await Game.update(req.body,{where:{id:req.params.id}});
        res.json({text:'El juego con id: '+req.params.id+' ha sido actualizado'});
    }
}
export const gameController = new GameController();