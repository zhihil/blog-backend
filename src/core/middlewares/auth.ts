import { NextFunction, Response, Request } from "express";

class AuthMiddleware {
    injectUserSession(req: Request<{ user_id: string }, {}, { auth: { userID: number }}>, _: Response, next: NextFunction) {
        req.body['auth'] = { userID: parseInt(req.params.user_id) };
        next();
    }
}

export default AuthMiddleware;