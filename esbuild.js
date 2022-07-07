const childProcess = require('child_process');
const packageJson = require('./package.json');

const makeAllPackagesExternalPlugin = {
    name: 'make-all-packages-external',
    setup(build) {
        build.onResolve({filter: /\$[A-Za-z]+/}, args => ({external: false}))
        build.onResolve({filter: /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/}, args => ({path: args.path, external: true}))
    },
}

let builded;

require('esbuild').build({
    entryPoints: ['src/index.ts'],
    outfile: 'build/index.js',
    bundle: true,
    plugins: [makeAllPackagesExternalPlugin],
    platform: 'node',
    define: {
        'config.version': `"${packageJson.version}"`,
        'config.commitHash': `"${childProcess.execSync('git rev-parse HEAD').toString().trim()}"`,
        'config.commitCount': `${childProcess.execSync('git rev-list --count HEAD').toString().trim()}`,
        'config.buildDate': `"${new Date().toISOString()}"`,
    },
    watch: {
        onRebuild(error) {
            if (error) console.error('⚠ watch build failed:', error)
            else {
                for (let i = 0; i < process.stdout.rows; i++) console.log('');
                process.stdout.cursorTo(0, 0);
                console.log('✔ Build successful.')
                console.log('⚡ Restarting server...')
                if (builded) builded.kill();
                builded = childProcess.spawn('yarn', ['node', 'build/index.js'], {stdio: 'inherit'});
            }
        },
    },
}).then(() => {
    for (let i = 0; i < process.stdout.rows; i++) console.log('');
    process.stdout.cursorTo(0, 0);
    console.log('⚡ Starting server...')
    builded = childProcess.spawn('yarn', ['node', 'build/index.js'], {stdio: 'inherit'});
})
