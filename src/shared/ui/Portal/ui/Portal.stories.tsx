import type { Meta, StoryObj } from '@storybook/react'
import { Portal } from './Portal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
	title: 'shared/Portal',
	component: Portal,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
	args: {
		children: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
