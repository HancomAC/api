import express from 'express';

declare const config: { version: string, commitHash: string, commitCount: number, buildDate: string };

export default function () {
    return new Promise<void>((resolve) => {
        const app = express();

        app.use('/', (req, res) => {
            res.send(`Jungol API Backend v${config.version}.${config.commitCount} (${config.commitHash})`);
        })

        return app.listen(3000, resolve);
    })
}
