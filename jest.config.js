/**
 * Provide configuration settings for Jest test framework.
 *
 * @type {Object}
 */
const jestConfig = {
    testEnvironment: 'node',
    testMatch      : ['<rootDir>/**/test.js']
};

module.exports = jestConfig;
