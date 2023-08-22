import { useState } from 'react';

const useNoteManager = () => {
	const [notes, setNotes] = useState<Note[]>([]);

	const addNote = (note: Note) => {
		if (note) {
			setNotes((base) => {
				const items: Note[] = [...base, note];
				return items;
			});
		}
	};

	const deleteNote = (id: string) => {
		if (id) {
			setNotes((base) => {
				const items: Note[] = base.filter((note: Note, index: number) => {
					return note.id !== id;
				});
				return items;
			});
		}
	};

	return { notes, addNote, deleteNote };
};

export default useNoteManager;
