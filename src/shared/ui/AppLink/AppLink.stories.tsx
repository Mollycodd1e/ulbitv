import type { Meta, StoryObj } from '@storybook/react'
import {AppLink, AppLinkTheme} from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
	args: {
		to: '/',
	},
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'TEST',
		theme: AppLinkTheme.PRIMARY
	},
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator()]
}

export const Secondary: Story = {
	args: {
		children: 'TEST',
		theme: AppLinkTheme.SECONDARY
	},
	decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()]
}

export const Red: Story = {
	args: {
		children: 'TEST',
		theme: AppLinkTheme.RED
	},
	decorators: [ThemeDecorator(Theme.DARK), RouterDecorator()]
}