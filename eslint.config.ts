import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.strict,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser,
                ecmaFeatures: {
                    jsx: false,
                },
                extraFileExtensions: ['.vue'],
                vueFeatures: {
                    filter: true,
                    interpolationAsNonHTML: false,
                },
            },
        },
        rules: {
            'no-useless-escape': ['off'],
            'vue/component-tags-order': ['error', {
                'order': ['script', 'template', 'style']
            }],
            'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
                'registeredComponentsOnly': false,
                'ignores': []
            }],
            'quotes': [2, 'single', { 'avoidEscape': true }],
            'vue/multi-word-component-names': 0,
            'vue/html-indent': ['error', 4, {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 1,
                'alignAttributesVertically': false,
                'ignores': []
            }],
            'vue/html-closing-bracket-newline': ['error', {
                'singleline': 'never',
                'multiline': 'never'
            }],
            'keyword-spacing': ['error', {
                'before': true,
                'after': true,
                'overrides': {
                    'if': { 'after': false },
                    'while': { 'after': false },
                    'for': { 'after': false },
                }
            }],
            'indent': ['error', 4],
            'semi': [2, 'always'],
            'object-curly-spacing': ['error', 'always'],
            'space-before-blocks': ['error', 'always'],
        },
        // Add plugins section
        plugins: {
            vue: eslintPluginVue,
            '@typescript-eslint': typescriptEslint.plugin
        },
        // Add settings section
        settings: {
            tailwindcss: {
                // Configure path to Tailwind config
                config: './tailwind.config.js',
                // Explicitly include Vue files
                cssFiles: ['**/*.css', '**/*.vue'],
                // Ensure the plugin understands component syntax
                tags: ['template'],
                // For Vue template class attributes
                classRegex: '(class|className)s?'
            }
        },
    },
);