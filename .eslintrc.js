module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    project: './tsconfig.json'
  }, 
  project: ['./tsconfig.json']
}