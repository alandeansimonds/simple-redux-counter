import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './theme/theme';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
