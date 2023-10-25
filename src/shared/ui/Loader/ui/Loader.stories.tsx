import type { Meta, StoryObj } from '@storybook/react'
import { Loader} from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
	title: 'shared/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const LIGHT: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
}