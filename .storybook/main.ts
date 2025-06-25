import type { StorybookConfig } from '@storybook/vue3-vite';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
    // Required
    framework: {
        name: getAbsolutePath('@storybook/vue3-vite'),
        options: {
            docgen: {
                plugin: 'vue-component-meta',
                tsconfig: 'tsconfig.app.json',
            },
        },
    },
    stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    // Optional
    addons: [getAbsolutePath('@storybook/addon-docs')],
    docs: {
    // autodocs: 'tag',
    },
    viteFinal: async (config) => {
    // Ensure JSX plugin is configured
        const vue = (await import('@vitejs/plugin-vue')).default;
        const vueJsx = (await import('@vitejs/plugin-vue-jsx')).default;
    
        if(config.resolve) {
            config.resolve.conditions = [
                'source',
                ...(config.resolve.conditions ?? [])
            ];
        }

        config.plugins = config.plugins || [];
        config.plugins.push(vue());
        config.plugins.push(vueJsx({
            include: /\.(jsx|tsx)$/
        }));
    
        config.esbuild = {
            ...config.esbuild,
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxInject: 'import { h, Fragment } from \'vue\''
        };
        return config;
    },
    // staticDirs: ['../public'],
};

export default config;

function getAbsolutePath(value: string) {
    return dirname(require.resolve(join(value, 'package.json')));
}