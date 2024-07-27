/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testPathIgnorePatterns: [
    'dist/',
    'node_modules/',
  ],
  collectCoverage: true,
  collectCoverageFrom: ["./app/**"],
  coverageReporters: ['html'],
  coverageDirectory: './coverage'
};