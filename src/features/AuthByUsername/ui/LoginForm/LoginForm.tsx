import classNames from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Dispatch, SetStateAction, memo, useCallback, useEffect } from 'react'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { loginByUsername } from
	'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername'
import { AnyAction } from 'redux'
import { Text } from 'shared/ui/Text/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginUsername } from
	'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from
	'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from
	'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from
	'features/AuthByUsername/model/selectors/getIsLoginError/getIsLoginError'
import { DynamicLoader, ReducerList } from 'shared/lib/components/DynamicLoader/DynamicLoader'

export interface ILoginFormProps {
	className?: string
	setIsOpen?: Dispatch<SetStateAction<boolean>>
}

const InitialReducers: ReducerList = {
	loginForm: loginReducer,
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className, setIsOpen }: ILoginFormProps) => {
	const { t } = useTranslation()

	const dispatch = useDispatch()

	const store = useStore() as ReduxStoreWithManager

	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	useEffect(() => {
		store.reducerManager.add('loginForm', loginReducer)
		dispatch({ type: 'Init loginForm' })
		return () => {
			store.reducerManager.remove('loginForm')
			dispatch({ type: 'Destroy loginForm' })
		}
	}, [])

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
				username: username,
				password: password,
			}) as unknown as AnyAction
		)
		setIsOpen(false)
	}, [dispatch, password, username])

	return (
		<DynamicLoader
			unmount
			reducers={InitialReducers}>
			<div className={classNames(cls.root, {}, [className])}>
				<Text title='Форма авторизации' />
				{error && (
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
							value={username}
						/>
					</div>
					<div className={cls.inputWrapper}>
						<label>{t('Пароль')}</label>
						<Input
							className={cls.input}
							type='text'
							onChange={onChangePassword}
							value={password}
						/>
					</div>
				</div>
				<Button
					className={cls.loginBtn}
					onClick={onLoginClick}
					disabled={isLoading}>
					{t('Войти')}
				</Button>
			</div>
		</DynamicLoader>
	)
})

export default LoginForm
