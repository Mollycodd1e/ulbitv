import { StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import 'app/styles/index.scss'

export const StoreDecorator = (state: StateSchema) => (story: () => StoryFn) => {
	return (
		<StoreProvider initialState={state}>
			<div>{story()}</div>
		</StoreProvider>
	)
}
