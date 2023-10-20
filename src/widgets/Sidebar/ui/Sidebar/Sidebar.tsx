import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface ISidebarProps {
	className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.root, { [cls.collapsed]: collapsed }, [className])}>
			<button data-testid='sidebar-toggle' onClick={onToggle}>toggle</button>
			<div className={cls.switcher}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
