import classNames from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	disabled?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
	const { className, children, theme, disabled, ...otherProps } = props

	return (
		<button
			type='button'
			className={classNames(cls.root, {},
				[className, cls[theme], disabled ? cls.disabled : ''])}
			{...otherProps}>
			{children}
		</button>
	)
}
