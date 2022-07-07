import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

export default function (app: express.Application) {
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(compression());
}
