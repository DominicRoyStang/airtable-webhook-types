import pluginJs from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import stylisticPlugin from '@stylistic/eslint-plugin'

// If ignores/files are used without any other keys in the configuration object, then the patterns act as global
const globalIncludesConfig = { files: ['**/*.{js,ts}'] }
const globalIgnoresConfig = { ignores: ['**/dist/**'] }

export default [
  globalIncludesConfig,
  globalIgnoresConfig,
  stylisticPlugin.configs['recommended-flat'],
  pluginJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
]
