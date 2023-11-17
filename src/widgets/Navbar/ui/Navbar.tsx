import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useEffect, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface INavbarProps {
	className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [])

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<div className={cls.links}>
					<AppLink
						to={'/'}
						className={cls.link}
						theme={AppLinkTheme.SECONDARY}>
						{t('На главную')}
					</AppLink>
					<AppLink
						to={'/about'}
						className={cls.link}
						theme={AppLinkTheme.PRIMARY}>
						{t('О сайте')}
					</AppLink>
					<LoginModal
						isOpen={isAuthModal}
						onClose={onCloseModal}></LoginModal>
					<Button
						theme={ThemeButton.OUTLINE}
						className={cls.link}
						onClick={onLogout}>
						{t('Выйти')}
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					to={'/'}
					className={cls.link}
					theme={AppLinkTheme.SECONDARY}>
					{t('На главную')}
				</AppLink>
				<AppLink
					to={'/about'}
					className={cls.link}
					theme={AppLinkTheme.PRIMARY}>
					{t('О сайте')}
				</AppLink>
				<LoginModal
					isOpen={isAuthModal}
					onClose={onCloseModal}></LoginModal>
				<Button
					theme={ThemeButton.OUTLINE}
					className={cls.link}
					onClick={onShowModal}>
					{t('Войти')}
				</Button>
			</div>
		</div>
	)
}
