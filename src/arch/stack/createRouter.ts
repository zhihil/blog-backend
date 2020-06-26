import express from "express";
import { Middlewares, Controllers } from "../dependencyInjector/types";
import AuthorRouter from "./route/author";

const createRouter = (middlewares: Middlewares, controllers: Controllers) => {
    const router = express.Router();

    router.use("/", AuthorRouter(middlewares, controllers));

    router.get("/is-healthy", (req, res) => {
        res.send("The server is healthy");
    });

    return router;
};

export default createRouter;