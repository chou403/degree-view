module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential', //  Vue3 官方推荐的 ESLint 配置，
      'eslint:recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
      '@vue/prettier/@typescript-eslint',
      './.eslintrc-auto-import.json'
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      // 在这里添加你的规则
    },
  }