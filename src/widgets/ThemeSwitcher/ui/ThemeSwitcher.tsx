import classNames from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface IThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			className={classNames(cls.root, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
		</Button>
	)
}
