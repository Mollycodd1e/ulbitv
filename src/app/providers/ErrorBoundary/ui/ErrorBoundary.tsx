import { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { PageError } from 'widgets/PageError/ui/PageError'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return (
				<Suspense fallback={<Loader></Loader>}>
					<PageError></PageError>
				</Suspense>
			)
		}

		return this.props.children
	}
}
