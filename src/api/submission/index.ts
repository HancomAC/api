import express from "express";
import list from "./list";

export default function () {
    const router = express.Router();

    router.use("/:submissionId", (req, res) => {
        const submissionId = req.params.submissionId;
        res.send(submissionId);
    });

    router.get("/", async (req, res) => {
        const limit = parseInt(req.query.limit as string || '20') || 20;
        const cursor = req.query.cursor as string;
        const problemId = parseInt(req.query.problemId as string);
        const data = await list({limit, cursor, problemId});
        res.send(data)
    })

    return router;
}

