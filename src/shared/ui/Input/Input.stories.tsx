import type { Meta, StoryObj } from '@storybook/react'

import { Input} from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		className: '',
		value: 'test',
		onChange: () => {}
	},
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Outline: Story = {
	args: {
		className: '',
		value: 'test',
		onChange: () => {}
	},
	decorators: [ThemeDecorator(Theme.DARK) as any]
}