import { Paper } from '@mui/material';
import React from 'react';

import useNoteManager from '../../hooks/noteManager';
import { NotesGrid } from './NotesGrid';
import { SideBar } from './SideBar';

const MainContent: React.FC = () => {
	const { notes, addNote, deleteNote } = useNoteManager();

	return (
		<Paper
			component='main'
			sx={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: '1fr 9fr',
				height: 'calc(100vh - 2.5rem)',
			}}
		>
			<SideBar addNote={addNote} />
			<NotesGrid notes={notes} deleteNote={deleteNote} />
		</Paper>
	);
};

export default MainContent;
