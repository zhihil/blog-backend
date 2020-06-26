import { Middlewares, Controllers } from "../../dependencyInjector/types";
import { Router } from "express";

const AuthorRouter = (middlewares: Middlewares, controllers: Controllers) => {
    const router = Router();

    router.post("/user/:user_id/blog", middlewares.auth.injectUserSession, controllers.blog.createPost);
    router.get("/user/:user_id/blog", middlewares.decode.decode('user_id'), controllers.blog.readPostByAuthor);
    router.get("/blog/:post_id", middlewares.decode.decode('post_id'), controllers.blog.readPost);
    router.put(
        "/user/:user_id/blog/:post_id", 
        middlewares.decode.decode('post_id'), 
        middlewares.decode.decode('user_id'),
        controllers.blog.updatePost
    );
    router.delete(
        "/blog/:post_id",
        middlewares.decode.decode('post_id'),
        controllers.blog.deletePost
    );
    
    return router;
}

export default AuthorRouter;