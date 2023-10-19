import { lazy } from 'react'

export const AboutPageAsync = lazy(
	() =>
		// import('./AboutPage')
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./AboutPage')), 1500)
		})
)

