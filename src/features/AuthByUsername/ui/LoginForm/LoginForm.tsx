import classNames from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ILoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: ILoginFormProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<div className={cls.inputWrapper}>
				<label>{t('Логин')}</label>
				<Input className={cls.input} type='text'></Input>
			</div>
			<div className={cls.inputWrapper}>
				<label>{t('Пароль')}</label>
				<Input className={cls.input} type='text'></Input>
			</div>
			<Button className={cls.loginBtn}>{t('Войти')}</Button>
		</div>
	)
}
