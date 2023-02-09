import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@vue-interface/activity-indicator': path.resolve(__dirname, '../packages/activity-indicator/index.ts')
        }
    }
});