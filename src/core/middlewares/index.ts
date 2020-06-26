import AuthMiddleware from "./auth";
import DecodeMiddleware from "./decode";

const middlewareMap = {
    auth: AuthMiddleware,
    decode: DecodeMiddleware
};

export type MiddlewareMap = typeof middlewareMap;

export default middlewareMap;