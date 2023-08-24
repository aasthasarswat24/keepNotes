import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	searchBar: {
		display: 'flex',
		width: '100%',
	},
}));

interface SearchBarProps {
	onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
	const classes = useStyles();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onChange(value);
	};

	return (
		<Box className={classes.searchBar}>
			<TextField
				variant='standard'
				placeholder='Search'
				onChange={handleInputChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<IconButton aria-label='search'>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
