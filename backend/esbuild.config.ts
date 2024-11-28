import * as esbuild from 'esbuild';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});
esbuild.build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    platform: 'node',
    outfile: './build/main.bundle.js',
    loader: {'.ts': 'ts'},
    define: {
        'process.env.TOKEN': `'${process.env['TOKEN']}'`
    }
}).then(() => console.log('⚡ Bundle Build Completed ⚡'))
