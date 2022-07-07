import cluster from "cluster";
import process from "process";
import {cpus} from "os";
import app from "./app";
import log, {error} from "./util/log";

declare const config: { version: string, commitHash: string, commitCount: number, buildDate: string, port: number };

const numCPUs = cpus().length;
const port = config.port;

if (cluster.isPrimary) {
    log(`Jungol API Backend v${config.version}.${config.commitCount} (${config.commitHash})`);
    log(`Main Thread ${process.pid} is running.`);
    log(`Starting with ${numCPUs - 1} workers...`);
    for (let i = 0; i < numCPUs - 1; i++) cluster.fork();
    cluster.on('exit', (deadWorker) => {
        error(`Worker ${deadWorker.process.pid} died. Restarting...`);
        cluster.fork();
    });
} else {
    app({port}).then(() => {
        log(`Server is running on port ${port}.`);
    })
}
