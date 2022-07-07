import express from 'express';
import api from "./api";
import prepare from "./util/prepare";

declare const config: { version: string, commitHash: string, commitCount: number, buildDate: string };

export default function ({port} = {port: 3005}) {
    return new Promise<void>((resolve) => {
        const app = express();

        prepare(app);

        app.use('/', api());

        app.get('/', (req, res) => {
            res.send(`Jungol API Backend v${config.version}.${config.commitCount} (${config.commitHash})`);
        })

        app.use((req, res) => {
            res.status(404).send('Not Found');
        })

        return app.listen(port, resolve);
    })
}
