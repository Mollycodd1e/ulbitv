import classNames from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
	ERROR = 'error'
}

interface ITextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}

export const Text = ({ className, title, text, theme }: ITextProps) => {
	return <div className={classNames(cls.root, {}, [className, cls[theme]])}>
		{title && <h3>{title}</h3>}
		{text && <p>{text}</p>}
	</div>
}
