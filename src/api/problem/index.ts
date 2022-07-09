import express from "express";
import dataset from "./dataset";

export default function () {
    const router = express.Router();

    router.use("/dataset", dataset());

    router.use("/", (req, res) => {
        res.send("Hello World!");
    });

    return router;
}
