import { useState } from 'react';

export const useNoteManager = () => {
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

	const editNote = (noteDetails: Note) => {
		if (noteDetails.id) {
			setNotes((prevNotes) => {
				const editedNotes: Note[] = prevNotes.map((note) => {
					return note.id === noteDetails.id
						? { ...note, ...noteDetails }
						: note;
				});
				return editedNotes;
			});
		}
	};

	return { notes, addNote, deleteNote, editNote };
};
