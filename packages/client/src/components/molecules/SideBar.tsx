import AddIcon from '@mui/icons-material/Add';
import { Box, Link, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { generateUniqueId } from '../../helpers/generateUniqueId';
import Logo from '../atoms/Logo';
import { CreateNoteDialog } from './CreateNoteDialog';

const useStyles = makeStyles((theme: Theme) => ({
	sideBarContainer: {
		borderRight: '2px solid #DCDCDC',
		padding: '40px 20px',
		display: 'flex',
		gap: 10,
		flexDirection: 'column',
		justifyItems: 'center',
	},
}));

interface SideBarProps {
	addNote: (note: Note) => void;
}

export const SideBar: React.FC<SideBarProps> = ({ addNote }) => {
	const classes = useStyles();

	const [openNewNoteDialog, setOpenNewNoteDialog] = useState(false);

	const handleDialog = () => {
		setOpenNewNoteDialog(!openNewNoteDialog);
	};

	return (
		<Box className={classes.sideBarContainer}>
			<Logo />
			<Link
				sx={{
					padding: '10px',
					margin: '0 auto',
					color: 'white',
					backgroundColor: 'primary.dark',
					'&:hover': {
						backgroundColor: 'primary.dark',
					},
				}}
				component='button'
				onClick={handleDialog}
			>
				<AddIcon fontSize='large' />
			</Link>

			{/* <List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List> */}

			<CreateNoteDialog
				open={openNewNoteDialog}
				handleClose={handleDialog}
				noteId={generateUniqueId()}
				addNote={addNote}
			/>
		</Box>
	);
};
