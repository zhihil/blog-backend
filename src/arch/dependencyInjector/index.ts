
import { ModelMap } from "../../core/models";
import { ServiceMap } from "../../core/services";
import { ControllerMap } from "../../core/controllers";
import { Models, Services, Middlewares, Controllers, DependencyInjectorConfig } from "./types";

class DependencyInjector {
    static injectDependencies(config: DependencyInjectorConfig) {
        const models = DependencyInjector.buildModels(config);
        const services = DependencyInjector.buildServices(config, models);
        const middlewares = DependencyInjector.buildMiddleware(config, services);
        const controllers = DependencyInjector.buildControllers(config, services);

        return { middlewares, controllers }
    }

    static buildModels(config: DependencyInjectorConfig): Models {
        const models = {};

        return models;
    }

    static buildServices(config: DependencyInjectorConfig, models: ModelMap): Services {
        const services = {};

        return services;
    }

    static buildMiddleware(config: DependencyInjectorConfig, services: ServiceMap): Middlewares {
        const middleware = {};

        return middleware;
    }

    static buildControllers(config: DependencyInjectorConfig, services: ControllerMap): Controllers {
        const controllers = {};
        
        return controllers;
    }
}

export default DependencyInjector;