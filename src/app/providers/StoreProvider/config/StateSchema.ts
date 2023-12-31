import { AnyAction, Reducer, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit'
import { CounterSchema } from 'entities/Counter/model/types/counterSchema'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => ReducersMapObject<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
	reducerManager: IReducerManager
}