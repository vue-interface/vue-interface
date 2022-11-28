import vue from '@vitejs/plugin-vue';
import { pascalCase } from "change-case";
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name } from './package.json';

const fileName = name.split('/')[1];

export default defineConfig({
    optimizeDeps: {
        exclude: ['@vue-interface/activity-indicator']
    },
    build: {
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
