import express from "express";
import dataset from "./dataset";
import handler from "$util/handler";
import {get} from "./file";
import {search} from "./search";

export default function () {
    const router = express.Router();

    router.use("/dataset", dataset());

    router.get("/search", handler(async (req) => {
        return await search(req.query.keyword as string || '', parseInt(req.query.page as string || '0') || 0);
    }));

    router.get("/:problemId", handler(async (req) => {
        return await get((req.params.problemId));
    }));

    return router;
}
