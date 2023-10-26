import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface INavbarProps {
	className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

	const toggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev)
	}, [])

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>
					{t('На главную')}
				</AppLink>
				<AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.PRIMARY}>
					{t('О сайте')}
				</AppLink>
				<Modal isOpen={isAuthModal} setIsOpen={toggleModal}>
					{t('Приветики')}
				</Modal>
				<Button theme={ThemeButton.OUTLINE} className={cls.link} onClick={toggleModal}>
					{t('Войти')}
				</Button>
			</div>
		</div>
	)
}
