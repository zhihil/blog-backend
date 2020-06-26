import createRouter from "./createRouter";
import { Application } from "express";
import { Middlewares, Controllers } from "../dependencyInjector/types";
import bodyParser from "body-parser"

const initExpressStack = (app: Application, middlewares: Middlewares, controllers: Controllers) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(createRouter(middlewares, controllers));
}

export default initExpressStack;