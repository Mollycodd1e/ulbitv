import { screen } from '@testing-library/react'
import { Counter } from './counter'

describe('Counter', () => {
	test('render', () => {
		componentRender(<Counter />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})
function componentRender() {
	throw new Error('Function not implemented.')
}

