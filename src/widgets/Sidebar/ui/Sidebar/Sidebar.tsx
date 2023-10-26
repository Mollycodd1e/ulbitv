import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface ISidebarProps {
	className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const { t } = useTranslation()

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.root, { [cls.collapsed]: collapsed }, [className])}>
			<Button
				data-testid='sidebar-toggle'
				theme={ThemeButton.CLEAR}
				className={cls.collapseBtn}
				onClick={onToggle}>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={classNames(cls.switcher, { [cls.switcherCollapsed]: collapsed }, [])}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
