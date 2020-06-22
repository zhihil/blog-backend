import express from "express";
import { MiddlewareMap } from "../../core/middlewares";
import { ControllerMap } from "../../core/controllers";

const createRouter = (middlewares: MiddlewareMap, controllers: ControllerMap) => {
    const router = express.Router();

    router.get("/is-healthy", (req, res) => {
        res.send("The server is healthy");
    });

    return router;
};

export default createRouter;