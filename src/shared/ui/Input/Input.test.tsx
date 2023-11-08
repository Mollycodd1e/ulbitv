import { render, screen } from '@testing-library/react'
import { Input} from 'shared/ui/Input/Input'

describe('classNames', () => {
	test('render', () => {
		render(<Input>TEST</Input>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})
