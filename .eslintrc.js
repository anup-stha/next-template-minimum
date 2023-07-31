module.exports = {
  extends: [
    'next',
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['unused-imports', 'simple-import-sort'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'error',
    camelcase: 'off',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    'no-nested-ternary': 'error',
    'testing-library/prefer-screen-queries': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'tailwindcss/classnames-order': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages 'react' related packages come first.
          ['^react', '^next', '^@?\\w'],
          ['^@/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          // relative paths up until 3 levels
        ],
      },
    ],
  },
};
