import { Paper, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import useNoteManager from '../../hooks/noteManager';
import NoteCard from '../NoteCard';
import CreateNote from '../CreateNote';

const MainContent: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const contentStyles = {
		padding: isSmallScreen ? theme.spacing(2) : theme.spacing(3),
		margin: 0,
		width: '100%',
		height: '100%',
	};

	const { notes, addNote, deleteNote } = useNoteManager();

	return (
		<Paper sx={contentStyles}>
			<CreateNote addNote={addNote} />
			{notes.map((note: Note, index: number) => {
				return <NoteCard key={index} note={note} deleteNote={deleteNote} />;
			})}
		</Paper>
	);
};

export default MainContent;
