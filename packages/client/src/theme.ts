import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
	palette: {
		primary: {
			light: '#DCDCDC',
			main: '#1976d2',
			dark: '#26282A',
			contrastText: '#f1f1f1',
		},
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 8,
	typography: {
		fontFamily: ['BlinkMacSystemFont'].join(','),
		fontSize: 12,
	},
	components: {
		MuiLink: {
			styleOverrides: {
				button: {
					borderRadius: '50%',
					padding: '5px',
					backgroundColor: '#DCDCDC',
					color: '#f1f1f1',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					'&:hover': {
						background: '#9A9A9A',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#F5F5F5',
					boxShadow: 'none',
					borderRadius: 20,
					padding: '20px',
				},
			},
		},
	},
});
