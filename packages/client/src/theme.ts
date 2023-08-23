import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#000000',
		},
	},
	components: {
		MuiLink: {
			styleOverrides: {
				button: {
					borderRadius: '50%',
					padding: '4px',
					backgroundColor: 'black',
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			},
		},
	},
});
