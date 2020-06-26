import BlogController from "./blog";

const controllerMap = {
    blog: BlogController
};

export type ControllerMap = typeof controllerMap;

export default controllerMap;