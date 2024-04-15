import VuePlugin from 'eslint-plugin-vue'
import PrettierPlugin from 'eslint-plugin-prettier'
import tsLintPlugin from '@typescript-eslint/eslint-plugin'

export default [
  ...VuePlugin.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    plugins: {
      prettier: PrettierPlugin,
      '@typescript-eslint': { ...tsLintPlugin }
    }
  }
]
