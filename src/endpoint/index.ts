import express from "express";

export default function () {
    const router = express.Router();

    router.use("/", (req, res) => {
        res.send("Hello World!");
    });

    return router;
}
