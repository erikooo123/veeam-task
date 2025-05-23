module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},
	plugins: ['@typescript-eslint', 'prettier', 'perfectionist'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:perfectionist/recommended-natural',
	],
	rules: {
		'perfectionist/sort-imports': [
			'error',
			{
				groups: [
					'type',
					['builtin', 'external'],
					'internal-type',
					'internal',
					['parent-type', 'sibling-type', 'index-type'],
					['parent', 'sibling', 'index'],
					'object',
					'unknown',
				],
				ignoreCases: false,
				internalPattern: ['@lmn/*'],
				newlinesBetween: 'always',
				order: 'asc',
				type: 'natural',
			},
		],
		'perfectionist/sort-modules': 'off',
		'perfectionist/sort-objects': [
			'error',
			{
				order: 'asc',
				type: 'natural',
			},
		],
		'perfectionist/sort-object-types': [
			'error',
			{
				order: 'asc',
				type: 'natural',
			},
		],
		'perfectionist/sort-named-imports': [
			'error',
			{
				groupKind: 'types-first',
				order: 'asc',
				type: 'natural',
			},
		],
		'perfectionist/sort-union-types': [
			'error',
			{
				groups: [
					'conditional',
					'function',
					'import',
					'intersection',
					'keyword',
					'literal',
					'named',
					'object',
					'operator',
					'tuple',
					'union',
					'nullish',
				],
				order: 'asc',
				type: 'natural',
			},
		],
	},
};
