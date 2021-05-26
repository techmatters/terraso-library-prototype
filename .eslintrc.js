module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'

  ],
  rules: {
    'react/prop-types': 0,
    'no-trailing-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'eol-last': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'comma-spacing': 'error',
    'brace-style': 'error',

    semi: [2, 'always']

  }
};
