import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'TEST',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Clear: Story = {
	args: {
		children: 'TEST',
		theme: ThemeButton.CLEAR
	},
}

export const Outline: Story = {
	args: {
		children: 'TEST',
		theme: ThemeButton.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.DARK) as any]
}

export const Disabled: Story = {
	args: {
		children: 'TEST',
		disabled: true
	},
	decorators: [ThemeDecorator(Theme.LIGHT)]
}
