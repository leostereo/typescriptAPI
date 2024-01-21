import { Router } from "express";

export class BaseRouter<T> {

    public router: Router;
    public controller: T;
    //public middleware de tipo U
    constructor(Tcontroller:{new ():T}){
        this.router = Router();
        this.controller = new Tcontroller()
        this.routes()
    }

    routes(){

    }
}