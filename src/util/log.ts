export default function (...args: any[]) {
    console.log(`[$API][$TS=${Date.now()}][$LOG]`, ...args);
}

export function error(...args: any[]) {
    console.error(`[$API][$TS=${Date.now()}][$ERR]`, ...args);
}
