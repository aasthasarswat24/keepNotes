import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

import { NoteCard } from './NoteCard';

const useStyles = makeStyles((theme: Theme) => ({
	notesPageContainer: {
		width: '100%',
		overflowY: 'scroll',
		padding: '40px 60px',
	},
	gridContainer: {
		display: 'grid',
		gap: '20px',
		gridTemplateColumns: 'repeat(5,1fr)',
		justifyContent: 'space-between',
		placeItems: 'start',
		alignContent: 'start',
		alignItems: 'start',
	},
	gridItem: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}));

interface NotesGridProps {
	notes: Note[];
	deleteNote: (id: string) => void;
}

export const NotesGrid: React.FC<NotesGridProps> = ({ notes, deleteNote }) => {
	const classes = useStyles();

	return (
		<Box className={classes.notesPageContainer}>
			{/* <Box marginBottom={2}>
				<SearchBar onChange={() => {}} />
			</Box> */}
			<Box display='grid' gap={4}>
				<Typography
					fontSize='3rem'
					color='primary.dark'
					sx={{ fontWeight: 600 }}
				>
					Notes
				</Typography>
				<div className={classes.gridContainer}>
					{notes.map((item) => (
						<Grid key={item.id} item className={classes.gridItem}>
							<NoteCard note={item} deleteNote={deleteNote} />
						</Grid>
					))}
				</div>
			</Box>
		</Box>
	);
};
