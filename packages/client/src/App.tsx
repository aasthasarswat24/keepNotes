import { Box, CssBaseline, Paper } from '@mui/material';
import React from 'react';
import Footer from './components/Footer';
import MainContent from './components/molecules/MainContent';
import SideBar from './components/molecules/SideBar';

const App: React.FC = () => {
	return (
		<Box minHeight='100vh' display='flex' flexDirection='column'>
			<CssBaseline />
			{/* <Header /> */}
			<Paper
				component='main'
				sx={{
					width: '100%',
					display: 'flex',
					padding: 0,
					margin: 0,
					height: '94vh',
				}}
			>
				<SideBar />
				<MainContent />
			</Paper>
			<Footer />
		</Box>
	);
};

export default App;
