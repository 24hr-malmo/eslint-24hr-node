'use strict';

module.exports = {
    extends: [
        '@24hr/eslint-24hr',
    ],

    plugins: [
        'import',
    ],

    env: {
        node: true,
    },

    rules: {
        'import/no-unresolved': [ 2, { commonjs: true } ],
        'strict': [ 2, 'global' ],
    }
}
