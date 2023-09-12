// `.eslintrc.cjs`

/* eslint-env node */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],

  root: true,

  rules: {
    // styled-component 사용하여 선언한 변수가 컴포넌트 아래에 위치하는 것이 가독성이 좋아서 추가.
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
