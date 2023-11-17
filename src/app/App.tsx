import './styles/index.scss'
import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { AppProvider } from './providers/AppProvider/AppProvider'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
	const { theme } = useTheme()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.intiAuthData)
	}, [dispatch])

	return (
		<AppProvider>
			<div className={classNames('app', {}, [theme])}>
				<Suspense fallback=''>
					<Navbar />
					<div className='content-page'>
						<Sidebar />
						<AppRouter />
					</div>
				</Suspense>
			</div>
		</AppProvider>
	)
}

export default App
