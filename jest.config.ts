export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/tests/*.spec.ts"]
}