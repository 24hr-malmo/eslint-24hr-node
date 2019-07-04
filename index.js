module.exports = {
    extends: [
        '@24hr/eslint-config',
    ],

    plugins: [
        'import',
    ],

    env: {
        node: true,
    },

    rules: {
        'import/no-unresolved': [ 2, { commonjs: true } ],
    }
}
