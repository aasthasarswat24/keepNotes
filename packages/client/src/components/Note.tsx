import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props: any) => {
	const deleteNote = () => {
		props.deleteItem(props.id);
	};
	return (
		<>
			<div className='note'>
				<h3>{props.title}</h3>
				<p>{props.content}</p>
				<button className='btn' onClick={deleteNote}>
					<DeleteOutlineIcon className='deleteicon' />
				</button>
			</div>
		</>
	);
};

export default Note;
