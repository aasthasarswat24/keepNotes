import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const CreateNote = (props: any) => {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const InputEvent = (event: any) => {
		// const value=event.target.value;
		// const name=event.target.name;

		const { name, value } = event.target;

		setNote((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
		console.log(note);
	};
	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: '',
			content: '',
		});
	};

	return (
		<>
			<div className='main_note'>
				<form>
					<input
						type='text'
						name='title'
						value={note.title}
						onChange={InputEvent}
						placeholder='Title'
						// autocomplete='off'
					/>
					<textarea
						// rows=''
						// column=''
						name='content'
						value={note.content}
						onChange={InputEvent}
						placeholder='write a note...'
						// autocomplete='off'
					></textarea>
					<Button onClick={addEvent}>
						<AddIcon className='addbtn' />
					</Button>
				</form>
			</div>
		</>
	);
};

export default CreateNote;
