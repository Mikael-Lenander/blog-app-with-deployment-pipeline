module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'jest', 'testing-library', 'jest-dom'
  ],
  'settings': {
    'react': {
      'version': '18.2.0'
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'off',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'testing-library/no-container': 'off',
    'testing-library/no-node-access': 'off',
  }
}
