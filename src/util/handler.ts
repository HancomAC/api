import express from "express";
import Resp, {ResponseError} from "../types/response";

export default function (f: (req: express.Request) => Resp<any>) {
    const middleware: express.RequestHandler = async (req, res) => {
        try {
            const data = await f(req);
            if ((data as ResponseError<any>).error) res.status((data as ResponseError<any>).code || 500);
            res.json(data);
        } catch (e) {
            res.status(500).send(e.message);
        }
    };
    return middleware
}
