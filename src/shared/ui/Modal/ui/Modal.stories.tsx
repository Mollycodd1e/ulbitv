import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
	args: {
		isOpen: true,
		children: 'Приветики'
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

