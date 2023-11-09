import './styles/index.scss'
import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { AppProvider } from './providers/AppProvider/AppProvider'

const App = () => {


	const { theme } = useTheme()

	return (
		<AppProvider>
			<div className={classNames('app', {}, [theme])}>
				<Suspense fallback=''>
					<Navbar/>
					<div className='content-page'>
						<Sidebar/>
						<AppRouter />
					</div>
				</Suspense>
			</div>
		</AppProvider>
	)
}

export default App
