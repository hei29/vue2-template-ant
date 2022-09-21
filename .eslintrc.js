module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    'no-unused-vars': 'off',
    'vue/multi-word-component-names':'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    "requireConfigFile": false
  },
  parser: 'vue-eslint-parser',
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
