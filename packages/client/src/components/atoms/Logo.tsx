import { Box, Typography } from '@mui/material';
import React from 'react';

const Logo: React.FC = () => {
	return (
		<Box display='flex' alignItems='center' justifyContent='center'>
			<Typography
				variant='body1'
				color='black'
				marginBottom={2}
				fontWeight={700}
			>
				Write Memo
			</Typography>
		</Box>
	);
};

export default Logo;
