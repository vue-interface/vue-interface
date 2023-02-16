module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript'
    ],
    rules: {
        '@typescript-eslint/indent': ['error'],
        'indent': 0,
        'object-curly-spacing': ['error', 'always'],
        'semi': [2, 'always'],
        'space-before-blocks': ['error', 'always'],
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'vue/component-tags-order': ['error', {
            'order': ['script', 'template', 'style']
        }],
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
    }
};
