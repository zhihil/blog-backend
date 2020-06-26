import PostModel from "../../core/models/post";
import BlogManager from "../../core/services/blog";
import AuthMiddleware from "../../core/middlewares/auth";
import BlogController from "../../core/controllers/blog";
import DecodeMiddleware from "../../core/middlewares/decode";

export type DependencyInjectorConfig = {};

export type Controllers = {
    blog: BlogController;
};

export type Models = {
    postModel: PostModel;
};

export type Services = Partial<{
    blog: BlogManager;
}>;

export type Middlewares = {
    auth: AuthMiddleware;
    decode: DecodeMiddleware;
};

export type ManagerDependencies = Models & Services;
