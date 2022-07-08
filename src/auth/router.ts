import express from "express";
import {verify} from "./jwt";

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
    req.auth = verify(req.cookies?.auth);
    next();
}
