import Model from "./model";

export type DBPost = {
    post_id: number;
    text: string;
    author_id: number;
    created_at: string;
    last_updated: string;
};

class PostModel extends Model<DBPost> {
    static currentPosts = 0;

    static MOCK_createDBPost(data: { text: string, author_id: number }) {
        return {
            ...data,
            post_id: ++PostModel.currentPosts,
            created_at: new Date().toLocaleDateString(),
            last_updated: new Date().toLocaleDateString()
        };
    }

    constructor() {
        super('posts', PostModel.MOCK_createDBPost, 'post_id');
    }
}

export default PostModel;