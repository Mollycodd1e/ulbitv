import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'

interface IStoreProviderProps {
	children?: ReactNode
	initialState?: StateSchema
}

export const StoreProvider = (props: IStoreProviderProps) => {
	const { children, initialState } = props
	return <Provider store={}>{children}</Provider>
}
