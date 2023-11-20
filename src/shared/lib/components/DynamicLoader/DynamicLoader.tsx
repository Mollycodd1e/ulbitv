import { Reducer } from '@reduxjs/toolkit'
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface IDynamicLoaderProps {
	children?: React.ReactNode
	reducers: ReducerList
	unmount?: boolean
}

export const DynamicLoader: FC<IDynamicLoaderProps> = (props) => {
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()
	const { children, reducers, unmount } = props
	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
			store.reducerManager.add(name, reducer)
			dispatch({ type: `Init ${name}` })
		})

		return () => {
			if (unmount) {
				Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
					store.reducerManager.remove(name)
					dispatch({ type: `Destroy ${name}` })
				})
			}
		}
	}, [])

	return <>{children}</>
}
