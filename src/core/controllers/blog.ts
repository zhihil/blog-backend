import { Services } from "../../arch/dependencyInjector/types";
import BlogManager from "../services/blog";
import { checkDependency } from "../../util";
import { Request, Response } from "express";

class BlogController {
    private blogManager: BlogManager;

    constructor(services: Services) {
        checkDependency(services, 'blog');
        this.blogManager = services.blog!;
    }

    createPost = async (req: Request<{}, {}, { auth: { userID: number }, text: string }>, res: Response) => {
        const newPost = await this.blogManager.createPost(req.body.text, req.body.auth.userID);
        res.status(201).json(newPost);
    }

    readPostByAuthor = async (req: Request<{}, {}, { _user_id: number }>, res: Response) => {
        const posts = await this.blogManager.readPostByAuthor(req.body._user_id);
        res.status(200).json(posts);
    }

    readPost = async (req: Request<{}, {}, { _post_id: number }>, res: Response) => {
        const post = await this.blogManager.readPost(req.body._post_id);
        res.status(200).json(post);
    }

    updatePost = async (req: Request<{}, {}, { _user_id: number, _post_id: number, text: string }>, res: Response) => {
        const createdPost = await this.blogManager.updatePost(
            req.body._post_id, 
            { text: req.body.text, author_id: req.body._user_id }
        );
        res.status(createdPost ? 201 : 204).end();
    }

    deletePost = async (req: Request<{}, {}, { _post_id: number }>, res: Response) => {
        await this.blogManager.deletePost(req.body._post_id);
        res.status(204).end();
    }
}

export default BlogController;