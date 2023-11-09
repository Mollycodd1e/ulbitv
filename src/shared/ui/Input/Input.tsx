/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo } from 'react'

type CustomInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends CustomInput {
	className?: string
	value?: string
	onChange?: (value: string) => void
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: IInputProps) => {
	const { className, value , type = 'text', onChange, ...rest } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<label></label>
			<input onChange={onChangeHandler} type={type} value={value} {...rest}></input>
		</div>
	)
})
