import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middleware";


class App{
    public app: Application;
    constructor(){
        this.app = express()
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect()
    }
    //Minhas rotas 
    initializeRoutes(){
        //this.app.use('/',)
    }
    //Onde os erros irão passar 
    interceptionError(){
        this.app.use(errorMiddleware)
    }
    //Antes das rotas 
    middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); //text=Hello%20World
    }
    listen(){
        this.app.listen(3333, ()=>console.log('server is running'))
    }
}
export {App};