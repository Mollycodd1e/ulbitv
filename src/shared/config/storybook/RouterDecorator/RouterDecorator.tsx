import {StoryFn} from '@storybook/react';
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = ():any => (story: () => StoryFn) => {
	return (
		<BrowserRouter>
			{story()}
		</BrowserRouter>
	)
}