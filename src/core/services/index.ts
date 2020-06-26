import BlogManager from "./blog";

const serviceMap = {
    BlogManager: BlogManager
};

export type ServiceMap = typeof serviceMap;

export default serviceMap;