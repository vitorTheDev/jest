/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/src/main.ts"],
  watchPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/src/main.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/src/main.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
  globalSetup: './spec/jestGlobalSetup.ts',
  globalTeardown: './spec/jestGlobalTeardown.ts',
};