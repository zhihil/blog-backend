import express from "express";
import ServiceInjector from "./arch/dependencyInjector";
import http from "http";
import initExpressStack from "./arch/stack";

const { middlewares, controllers } = ServiceInjector.injectDependencies({});

const app = express();

initExpressStack(app, middlewares, controllers);

const server = http.createServer(app);

const port = process.env.PORT || 8000;
server.listen(port);
process.stdout.write(`Server listening in on ${port}`);
