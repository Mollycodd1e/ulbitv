import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from
	'shared/lib/classNames/tests/renderWithTranslation/renderWithTranslation'

describe('classNames', () => {
	test('render', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('test sidebar slice', () => {
		renderWithTranslation(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
