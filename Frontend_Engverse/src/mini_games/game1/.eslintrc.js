module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-unused-expressions": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "global-require": "off",
    "no-mixed-operators": "off"
  },
};
