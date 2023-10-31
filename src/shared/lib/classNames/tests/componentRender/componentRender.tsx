import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'

interface IComponentRenderProps {
	route?: string
	initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(component: ReactNode, options: IComponentRenderProps) {
	const { route = '/' } = options

	return render(
		<StoreProvider>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18n}></I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	)
}
