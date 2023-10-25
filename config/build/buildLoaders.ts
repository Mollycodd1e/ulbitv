import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoaders'
import { SvgLoaders } from './loaders/svgLoaders'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const SvgLoader = SvgLoaders

	const babelLoader = {
		test: /\.(js|jsx|tsx|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{ locales: ['ru', 'en'], keyAsDefaultValue: true },
					],
				],
			},
		},
	}

	const cssLoader = buildCssLoader(options)

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const FileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	return [FileLoader, SvgLoader, babelLoader, typescriptLoader, cssLoader]
}
