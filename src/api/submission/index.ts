import express from "express";
import handler from "$util/handler";
import list from "./list";
import get from "./get";

export default function () {
    const router = express.Router();

    router.use("/:submissionId", handler(async (req) => {
        const submissionId = parseInt(req.params.submissionId as string);
        if (isNaN(submissionId)) {
            return {
                error: 'Invalid submissionId',
                code: 400
            };
        }
        return await get(submissionId)
    }));

    router.get("/", handler(async (req) => {
        const limit = parseInt(req.query.limit as string || '20') || 20;
        const cursor = req.query.cursor as string;

        const problemId = parseInt(req.query.problemId as string);
        const contestId = parseInt(req.query.contestId as string);
        const account = req.query.account as string;

        return await list({limit, cursor, problemId, contestId, account});
    }))

    return router;
}

