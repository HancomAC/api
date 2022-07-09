import express from "express";
import dataset from "./dataset";
import handler from "$util/handler";
import {get} from "./file";

export default function () {
    const router = express.Router();

    router.use("/dataset", dataset());

    router.get("/:problemId", handler(async (req) => {
        return await get((req.params.problemId));
    }));

    return router;
}
