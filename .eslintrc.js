module.exports = {
    env: {
        'jest/globals': true,
        browser: true,
        es6: true,
        jest: true,
        mocha: true,
        node: true
    },
    extends: [
        'plugin:import/recommended',
        'airbnb-base',
        'eslint:recommended',
        'plugin:jest/recommended'
    ],
    globals: {
        document: true,
        shallow: true,
        sinon: true,
        window: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalDecorators: true,
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['babel', 'import', 'jest'],
    rules: {
        'comma-dangle': [
            'warn',
            {
                arrays: 'never',
                exports: 'ignore',
                functions: 'never',
                imports: 'ignore',
                objects: 'never'
            }
        ],
        'func-names': 0,
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        indent: [
            'error',
            4,
            {
                FunctionDeclaration: {
                    body: 1,
                    parameters: 3
                }
            }
        ],
        'key-spacing': [
            2,
            {
                align: 'colon'
            }
        ],
        'no-console': 'off',
        'no-template-curly-in-string': 'off',
        'no-undef': 'warn',
        'no-underscore-dangle': 0,
        'no-use-before-define': 'warn',
        'prefer-rest-params': 'warn',
        semi: 2,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'ignore',
                named: 'never'
            }
        ],
        'valid-jsdoc': [
            'warn',
            {
                prefer: {
                    returns: 'return',
                    yield: 'yields'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    String: 'string',
                    array: 'Array',
                    function: 'Function',
                    object: 'Object'
                },
                requireParamDescription: false,
                requireReturn: false,
                requireReturnDescription: false
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['./', 'node_modules']
            }
        }
    }
};
