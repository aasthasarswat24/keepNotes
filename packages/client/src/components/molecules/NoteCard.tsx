import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Link, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { NoteEditable } from './NoteDialog';

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		width: '100%',
		minHeight: 250,
		display: 'flex',
		flexDirection: 'column',
		gap: 14,
		justifyContent: 'center',
	},
	noteFooter: {
		marginTop: 10,
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

interface NoteCardProps {
	note: Note;
	deleteNote: (id: string) => void;
	addNote: (note: Note) => void;
	editNote: (note: Note) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({
	note,
	addNote,
	deleteNote,
	editNote,
}) => {
	const classes = useStyles();

	const [openEditable, setOpenEditable] = useState(false);

	const handleDialog = () => {
		setOpenEditable(!openEditable);
	};

	return (
		<>
			<Card className={classes.card}>
				<CardContent
					sx={{
						padding: 0,
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
						height: 250,
						overflow: 'hidden',
					}}
				>
					<Typography variant='h6'>{note.title && note.title}</Typography>
					<Typography variant='body1'>
						{note.description && note.description}
					</Typography>
				</CardContent>
				<Box className={classes.noteFooter}>
					<Box display='flex' gap={1}>
						<Link component='button' onClick={() => deleteNote(note.id)}>
							<DeleteIcon fontSize='small' />
						</Link>
						<Link component='button' onClick={handleDialog}>
							<EditIcon fontSize='small' />
						</Link>
					</Box>
				</Box>
			</Card>
			<NoteEditable
				open={openEditable}
				handleClose={handleDialog}
				note={note}
				deleteNote={deleteNote}
				addNote={addNote}
				editNote={editNote}
			/>
		</>
	);
};
