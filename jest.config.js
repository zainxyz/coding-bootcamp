/**
 * Provide configuration settings for Jest test framework.
 *
 * @type {Object}
 */
const jestConfig = {
    resolver                    : require.resolve('jest-pnp-resolver'),
    setupTestFrameworkScriptFile: '<rootDir>/scripts/jest.js',
    testEnvironment             : 'node',
    testMatch                   : ['<rootDir>/**/__tests__/*.test.js']
};

module.exports = jestConfig;
