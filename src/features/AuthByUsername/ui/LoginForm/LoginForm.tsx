import classNames from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, SetStateAction, memo, useCallback } from 'react'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from
	'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername'
import { AnyAction } from 'redux'
import { Text } from 'shared/ui/Text/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'

interface ILoginFormProps {
	className?: string
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({ className, setIsOpen }: ILoginFormProps) => {
	const { t } = useTranslation()

	const dispatch = useDispatch()
	const loginForm = useSelector(getLoginState)
	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onLoginClick = useCallback(() => {
		dispatch(
			loginByUsername({
				username: loginForm.username,
				password: loginForm.password,
			}) as unknown as AnyAction
		)
		setIsOpen(false)
	}, [dispatch, loginForm.password, loginForm.username])

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<Text title='Форма авторизации' />
			{loginForm.error && (
				<Text
					theme={TextTheme.ERROR}
					text={'Ошибка'}
				/>
			)}
			<div className={cls.fieldWrapper}>
				<div className={cls.inputWrapper}>
					<label>{t('Логин')}</label>
					<Input
						className={cls.input}
						type='text'
						onChange={onChangeUsername}
						value={loginForm.username}
					/>
				</div>
				<div className={cls.inputWrapper}>
					<label>{t('Пароль')}</label>
					<Input
						className={cls.input}
						type='text'
						onChange={onChangePassword}
						value={loginForm.password}
					/>
				</div>
			</div>
			<Button
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={loginForm.isLoading}>
				{t('Войти')}
			</Button>
		</div>
	)
})
