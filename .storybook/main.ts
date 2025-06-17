import type { StorybookConfig } from '@storybook/vue3-vite';
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  // Required
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: [getAbsolutePath("@storybook/addon-docs")],
  docs: {
    // autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Ensure JSX plugin is configured
    const vue = (await import('@vitejs/plugin-vue')).default
    const vueJsx = (await import('@vitejs/plugin-vue-jsx')).default
    
    console.log(config);
    
    config.plugins = config.plugins || []
    config.plugins.push(vue())
    config.plugins.push(vueJsx({
      include: /\.(jsx|tsx)$/
    }))
    
    config.esbuild = {
      ...config.esbuild,
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import { h, Fragment } from 'vue'`
    }
    return config
  },
  // staticDirs: ['../public'],
};

export default config;

// import tailwindcss from '@tailwindcss/postcss';
// import autoprefixer from 'autoprefixer';
// import { dirname, join, resolve } from "path";

// /**
// * This function is used to resolve the absolute path of a package.
// * It is needed in projects that use Yarn PnP or are set up within a monorepo.
// */
// function getAbsolutePath(value) {
//   return dirname(resolve(join(value, 'package.json')))
// }

// /** @type { import('@storybook/html-vite').StorybookConfig } */
// const config = {
//   "stories": [
//     "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     getAbsolutePath('@storybook/addon-docs'),
//     getAbsolutePath('@storybook/addon-themes')
//   ],
//   "framework": {
//     "name": getAbsolutePath('@storybook/html-vite'),
//     "options": {}
//   },
//   viteFinal: async (config) => {
//     config.css = config.css || {};
//     config.css.postcss = {
//       plugins: [
//         tailwindcss(), 
//         autoprefixer()
//       ],
//     };
//     return config;
//   }
// };
// export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}