module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			files: ['**/src/**/*.test.{ts, tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'i18next'],
	rules: {
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/no-deprecated': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'react/display-name': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'i18next/no-literal-string': [
			'error',
			{ markupOnly: true, ignoreAttributes: ['data-testid', 'to'] },
		],
		'max-len': ['error', { ignoreComments: true, code: 100 }],
	},
	globals: {
		__IS_DEV__: true,
	},
}
