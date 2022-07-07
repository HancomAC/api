import express from "express";
import handler from "$util/handler";

export default function () {
    const router = express.Router();

    router.use("/", handler(async () => {
        return {data: true}
    }));

    return router;
}
