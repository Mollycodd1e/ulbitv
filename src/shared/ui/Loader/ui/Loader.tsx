import classNames from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import { Theme } from 'app/providers/ThemeProvider'

interface ILoaderProps {
	className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
	const theme = localStorage.getItem('theme')

	return (
		<div className={classNames(cls.ldsSpinner, {}, [className, Theme.DARK === theme? cls.dark : ''])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
