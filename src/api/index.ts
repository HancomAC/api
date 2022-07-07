import express from "express";
import problem from "./problem";
import submission from "./submission";
import account from "./account";
import contest from "./contest";
import problemSet from "./problemSet";
import ranking from "./ranking";

export default function () {
    const router = express.Router();

    router.use("/account", account());
    router.use("/contest", contest());
    router.use("/problem", problem());
    router.use("/problemSet", problemSet());
    router.use("/ranking", ranking());
    router.use("/submission", submission());

    return router;
}
