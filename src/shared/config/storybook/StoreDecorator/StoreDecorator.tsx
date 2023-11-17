import { StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import 'app/styles/index.scss'
import { DeepPartial } from 'redux'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story: () => StoryFn) => {
	return (
		<StoreProvider initialState={state}>
			<div>{story()}</div>
		</StoreProvider>
	)
}
