import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
	className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
					{t('На главную')}
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	)
}
