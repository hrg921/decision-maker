const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  // initialized
  preset: "ts-jest",
  testEnvironment: "node",
  // customized
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[t]sx?$",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  moduleDirectories: [".", "src", "node_modules"]
};
