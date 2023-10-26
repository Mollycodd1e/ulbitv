import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
	return (
		<div className={`app ${theme}`}>
			<Story />
		</div>
	)
}
