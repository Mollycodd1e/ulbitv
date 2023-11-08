/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type CustomInput = Omit<JSX.IntrinsicElements['input'], 'value' | 'onChange'>

interface IInputProps extends CustomInput {
	className?: string
	value?: string
	onChange?: () => void
}

export const Input = (props: IInputProps) => {
	const { className, value , onChange, ...rest } = props

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<label></label>
			<input onChange={onChange} value={value} {...rest}></input>
		</div>
	)
}
