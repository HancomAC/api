import express from 'express';
import api from "./api";
import auth from "./auth";
import prepare from "./util/prepare";
import handler from "$util/handler";

declare const config: { version: string, commitHash: string, commitCount: number, buildDate: string };

export default function ({port} = {port: 80}) {
    return new Promise<void>((resolve) => {
        const app = express();

        prepare(app);

        app.use(auth);

        app.use('/', api());

        app.get('/', (req, res) => {
            res.send(`Jungol API Backend v${config.version}.${config.commitCount} (${config.commitHash})`);
        })

        app.use(handler(async () => {
            return {
                error: 'Not Found',
                code: 404
            }
        }))

        return app.listen(port, resolve);
    })
}
