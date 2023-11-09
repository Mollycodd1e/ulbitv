import classNames from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

interface ITextProps {
	className?: string
	title?: string
	text?: string
}

export const Text = ({ className, title, text }: ITextProps) => {
	return <div className={classNames(cls.root, {}, [className])}>
		{title && <p>{title}</p>}
		{text && <p>{text}</p>}
	</div>
}
