import AddIcon from '@mui/icons-material/Add';
import { Box, Link, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Logo from '../atoms/Logo';

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

	const DUMMY_NOTE: Note = {
		id: `${Math.random}note`,
		title: 'this is title of new note',
		description: 'this is note one',
		label: 'this is note one',
		date: new Date(),
		time: '00:00:00',
		color: 'white',
		completed: false,
		priority: 'low',
		attachments: [],
		reminders: [],
	};

	return (
		<Box className={classes.sideBarContainer}>
			<Logo />
			<Link
				sx={{ padding: '10px', margin: '0 auto' }}
				component='button'
				onClick={() => {
					addNote(DUMMY_NOTE);
				}}
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
		</Box>
	);
};
