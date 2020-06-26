import { Request, Response, NextFunction } from "express";

class DecodeMiddleware {
    decode(paramName: string) {
        return (req: Request<any>, _: Response, next: NextFunction) => {
            req.body[`_${paramName}`] = parseInt(req.params[paramName]);
            next();
        }
    }
}

export default DecodeMiddleware;