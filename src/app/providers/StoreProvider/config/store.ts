import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducesManager'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducers)

	const store= configureStore<StateSchema>({
		//@ts-ignore
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})

	//@ts-ignorew
	store.reducerManager = reducerManager
	return store
}
