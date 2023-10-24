import classNames from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface ILoaderProps {
	className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
	return (
		<div className={classNames(cls.ldsSpinner, {}, [className])}>
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
