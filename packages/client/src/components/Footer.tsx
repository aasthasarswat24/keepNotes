import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
	return (
		<Box bgcolor='black' color='white' p={1} textAlign='center'>
			<Typography variant='body2'>&copy; 2023. All rights reserved.</Typography>
		</Box>
	);
};

export default Footer;
