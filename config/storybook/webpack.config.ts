import webpack from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from './../build/loaders/buildCssLoaders'

export default ({config}: {config: webpack.Configuration}) => {

	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	}

	//@ts-ignore
	config.module.rules = [...config.module.rules.map(rule => {
		//@ts-ignore
		if (/svg/.test(rule.test as string)) {
			return { ...rule as any, exclude: /\.svg$/i }
		}

		return rule
	}),
	{
		test: /\.svg$/i,
		use: ['@svgr/webpack']
	}
	]

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')
	config.module?.rules?.push(buildCssLoader({
		mode: 'development',
		paths: paths,
		isDev: true,
		port: 3000,
	}),)

	return config
}