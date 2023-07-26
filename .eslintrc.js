module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // 这里添加一行规则把这条规则隐藏
    "import/prefer-default-export": 0,
    quotes: [0, "double"],
    "linebreak-style": [0, "unix"],
    "import/no-extraneous-dependencies": [0, { devDependencies: true }],
  },
};
