import createRouter from "./createRouter";
import { Application } from "express";
import { Middlewares, Controllers } from "../dependencyInjector/types";

const initExpressStack = (app: Application, middlewares: Middlewares, controllers: Controllers) => {
    app.use(createRouter(middlewares, controllers));
}

export default initExpressStack;