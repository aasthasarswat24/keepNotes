import ArchiveIcon from '@mui/icons-material/Archive';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CloseIcon from '@mui/icons-material/Close';
import LabelIcon from '@mui/icons-material/Label';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, Link, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';

interface NoteEditableProps {
	open: boolean;
	handleClose: () => void;
	note: Note;
	addNote: (note: Note) => void;
	deleteNote: (id: string) => void;
	editNote: (note: Note) => void;
}

export const NoteEditable: React.FC<NoteEditableProps> = ({
	open,
	handleClose,
	note,
	deleteNote,
	addNote,
	editNote,
}) => {
	const { control, handleSubmit, setValue } = useForm({
		defaultValues: note,
	});

	const { isDirty, isValid } = useFormState({ control });

	const onSubmit = (data: Note) => {
		if (isDirty && isValid) {
			console.log('onSubmitCalled', data);
			editNote(data);
		}
	};

	const handleFieldChange = (fieldName: keyof Note, value: any) => {
		setValue(fieldName, value);
	};

	return (
		<Dialog
			open={open}
			sx={{ height: 600 }}
			onClose={() => {
				handleSubmit(onSubmit)();
				handleClose();
			}}
		>
			<IconButton
				aria-label='close'
				onClick={handleClose}
				sx={{
					position: 'absolute',
					top: 5,
					right: 5,
					zIndex: 1,
				}}
			>
				<CloseIcon />
			</IconButton>
			<form style={{ width: 550, padding: 20 }}>
				<DialogTitle>
					<Controller
						name='title'
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label={field.value ? '' : 'Title'}
								variant='standard'
								multiline
								fullWidth
								onChange={(e) => {
									field.onChange(e);
									handleFieldChange('title', e.target.value);
								}}
							/>
						)}
					/>
				</DialogTitle>
				<DialogContent>
					<Controller
						name='description'
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label={field.value ? '' : 'Description'}
								variant='standard'
								multiline
								fullWidth
								onChange={(e) => {
									field.onChange(e);
									handleFieldChange('description', e.target.value);
								}}
							/>
						)}
					/>
				</DialogContent>
			</form>
			<DialogActions
				sx={{ paddingX: 4, display: 'flex', justifyContent: 'space-between' }}
			>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Link sx={{ margin: '0 auto' }} href='#'>
						<LabelIcon />
					</Link>
					<Link sx={{ margin: '0 auto' }} href='#'>
						<NotificationsActiveIcon />
					</Link>
					<Link sx={{ margin: '0 auto' }} href='#'>
						<ArchiveIcon />
					</Link>
					<Link sx={{ margin: '0 auto' }} href='#'>
						<AttachmentIcon />
					</Link>
					<Link sx={{ margin: '0 auto' }} href='#'>
						<SendIcon />
					</Link>
				</Box>
				<Typography>time</Typography>
			</DialogActions>
		</Dialog>
	);
};
