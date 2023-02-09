import vue from '@vitejs/plugin-vue';
import { pascalCase } from "change-case";
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name } from './package.json';

const fileName = name.split('/')[1];

export default defineConfig({
    // resolve: {
    //     alias: {
    //         '@vue-interface/activity-indicator/dist/style.css': '../activity-indicator/dist/style.css',
    //         '@vue-interface/activity-indicator': '../activity-indicator/dist/activity-indicator.js'
    //     }
    // },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: pascalCase(fileName),
            fileName,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
            }
        },
        watch: !process.env.NODE_ENV && {
            include: [
                './tailwindcss/**/*.js'
            ]
        }
    },
    plugins: [
        vue(),
        dts(),
    ],
});
