import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton } from 'shared/ui/Button/Button'

interface ILangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(cls.root, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}>
			{t('Язык')}
		</Button>
	)
}

