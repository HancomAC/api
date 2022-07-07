import express from "express";
import list from "./list";

export default function () {
    const router = express.Router();

    router.use("/:submissionId", (req, res) => {
        const submissionId = req.params.submissionId;
        res.send(submissionId);
    });

    router.get("/", async (req, res) => {
        const cursor = req.query.cursor as string;
        const data = await list({cursor});
        res.send(data)
    })

    return router;
}
