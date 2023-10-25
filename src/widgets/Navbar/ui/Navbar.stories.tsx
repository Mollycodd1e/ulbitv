import type { Meta, StoryObj } from '@storybook/react'
import { Navbar} from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Secondary: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
}