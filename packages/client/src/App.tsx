import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import Footer from './components/molecules/Footer';
import MainContent from './components/molecules/MainContent';

const MAX_WIDTH = '1920px';
export const FooterHeight = '2.5rem';

const App: React.FC = () => {
	return (
		<Box height='100vh' display='flex' justifyContent='center' margin='auto'>
			<CssBaseline />
			<Box display='grid' width='100%' height='100vh' maxWidth={MAX_WIDTH}>
				<MainContent />
				<Footer />
			</Box>
		</Box>
	);
};

export default App;
