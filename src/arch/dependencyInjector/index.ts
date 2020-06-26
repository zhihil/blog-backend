
import modelMap from "../../core/models";
import { Models, Services, Middlewares, Controllers, DependencyInjectorConfig } from "./types";
import _ from 'lodash';
import BlogManager from "../../core/services/blog";
import middlewareMap from "../../core/middlewares";
import controllerMap from "../../core/controllers";

class DependencyInjector {
    static injectDependencies(config: DependencyInjectorConfig) {
        const models = DependencyInjector.injectModels(config);
        const services = DependencyInjector.injectServices(config, models);
        const middlewares = DependencyInjector.injectMiddleware(config, services);
        const controllers = DependencyInjector.injectController(config, services);

        return { middlewares, controllers }
    }

    static injectModels(config: DependencyInjectorConfig): Models {
        const models: any = {};

        _.forOwn(modelMap, (Model, modelName) => {
            models[_.camelCase(modelName)] = new Model;
        })

        return models;
    }

    static injectServices(config: DependencyInjectorConfig, models: Models): Services {
        const services: Services = {};
        const dependencies = { ...models };

        services.blog = new BlogManager(dependencies);

        return services;
    }

    static injectMiddleware(config: DependencyInjectorConfig, services: Services): Middlewares {
        const middleware: any= {};

        _.forOwn(middlewareMap, (Middleware, middlewareName) => {
            middleware[_.camelCase(middlewareName)] = new Middleware();
        })

        return middleware;
    }

    static injectController(config: DependencyInjectorConfig, services: Services): Controllers {
        const controllers: any = {};

        _.forOwn(controllerMap, (Controller, controllerName) => {
            controllers[_.camelCase(controllerName)] = new Controller(services);
        })
        
        return controllers;
    }
}

export default DependencyInjector;