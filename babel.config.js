module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [
      "@babel/preset-typescript",
      { isTSX: true, allExtensions: true, jsxPragma: "Kurtka.createNode" },
    ],
  ],
};
