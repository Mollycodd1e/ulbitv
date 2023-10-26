import { Dispatch, FC, SetStateAction, createContext } from 'react'

class AppStore {
	isOpen: boolean = false
	setIsOpen: Dispatch<SetStateAction<boolean>> = () => {}
}

const AppStores = new AppStore()

export const AppContext = createContext(AppStores )

interface IAppStoreProps {
	children?: React.ReactNode
	AppStores?: {
		isOpen: boolean
		setIsOpen: Dispatch<SetStateAction<boolean>>
	}
}

export const AppProvider: FC<IAppStoreProps> = ({ children, AppStores }) => {
	return <AppContext.Provider value={AppStores}>{children}</AppContext.Provider>
}
