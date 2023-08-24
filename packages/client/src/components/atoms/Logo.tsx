import { Box, Typography } from '@mui/material';
import React from 'react';

const Logo: React.FC = () => {
	return (
		<Box display='flex' alignItems='center' justifyContent='center'>
			<Typography
				color='primary.dark'
				marginBottom={2}
				fontWeight={600}
				fontSize='1rem'
			>
				Write Memo
			</Typography>
		</Box>
	);
};

export default Logo;
