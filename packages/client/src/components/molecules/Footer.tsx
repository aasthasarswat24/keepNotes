import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
	return (
		<Box
			bgcolor='primary.dark'
			color='primary.contrastText'
			display='flex'
			justifyContent='center'
			alignItems='center'
			height='2.5rem'
		>
			<Typography variant='body2' fontSize='0.8rem'>
				&copy; 2023. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
