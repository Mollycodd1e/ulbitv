import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
	title: 'shared/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		title: 'Покатики',
		text: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
	args: {
		title: 'Покатики',
		text: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryTitle: Story = {
	args: {
		title: 'Покатики',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkTitle: Story = {
	args: {
		title: 'Покатики',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryText: Story = {
	args: {
		text: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkText: Story = {
	args: {
		text: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}