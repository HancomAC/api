import express from "express";

export default function () {
    const router = express.Router();
    router.get("/", (req, res) => {
        res.send("Hello World!");
    });
}
