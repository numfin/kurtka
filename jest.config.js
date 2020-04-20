module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.ts?(x)"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
