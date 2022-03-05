import {createTheme} from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#f0f5f5',
		},
		secondary: {
			main: '#f50057',
		},
		error: {
			main: '#d50000',
		},
	},
	typography: {
		h1: {
			fontFamily: 'Montserrat',
			fontWeight: 'bolder',
		},
		h2: {
			fontFamily: 'Montserrat',
		},
		h3: {
			fontFamily: 'Montserrat',
			fontWeight: 'bold',
		},
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});
