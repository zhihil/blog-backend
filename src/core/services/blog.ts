import { ManagerDependencies } from "../../arch/dependencyInjector/types";
import { checkDependency } from "../../util";
import PostModel, { DBPost } from "../models/post";
import { Encoded } from "../../types";

export type Post = Encoded<DBPost, 'author_id' | 'post_id'>;

export type PostUpdatePayload = Partial<Pick<DBPost, 'text' | 'author_id'>>;

class BlogManager {
    private postModel: PostModel;

    constructor(services: ManagerDependencies) {
        checkDependency(services, 'postModel');

        this.postModel = services.postModel;
    }

    async createPost(text: string, author_id: number) {
        return this.postModel.create({ text, author_id });
    }

    async readPostByAuthor(author_id: number) {
        return this.postModel.read(author_id, { idName: 'author_id' });
    }

    async readPost(post_id: number) {
        return (await this.postModel.read(post_id))[0] ?? null;
    }

    async updatePost(post_id: number, newData: PostUpdatePayload) {
        return this.postModel.update(post_id, newData);
    }

    async deletePost(post_id: number) {
        await this.postModel.delete(post_id);
    }
}

export default BlogManager;