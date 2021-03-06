module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  'rules': {
    'no-trailing-spaces': 0,
    'indent': 0,
    'no-else-return': 0,
    'brace-style': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
