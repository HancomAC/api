import express from "express";
import cors from "cors";

export default function (app: express.Application) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
}
