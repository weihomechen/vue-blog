module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'object-curly-newline': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
