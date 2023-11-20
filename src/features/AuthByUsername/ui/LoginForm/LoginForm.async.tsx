import { FC, lazy} from 'react'
import { ILoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
	() =>
		// import('./LoginForm')
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./LoginForm')), 1000)
		})
)

