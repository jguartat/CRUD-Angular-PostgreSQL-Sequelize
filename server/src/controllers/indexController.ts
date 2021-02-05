import {Request,Response} from 'express';

class IndexController{
    public index(req:Request,res:Response){
        res.send('Hola soy un servicio');
    }
}
export const indexController = new IndexController();