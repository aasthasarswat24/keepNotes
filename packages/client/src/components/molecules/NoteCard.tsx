import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Link, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { Label } from '../atoms/Label';

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		width: '100%',
		height: '100%',
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
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, deleteNote }) => {
	const classes = useStyles();

	const label = 'label';

	return (
		<Card className={classes.card}>
			<CardContent
				sx={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 1 }}
			>
				<Typography fontSize='1rem' fontWeight={600}>
					{note.title}
				</Typography>
				<div>{note.description}</div>
			</CardContent>
			<Box className={classes.noteFooter}>
				<Label category={label} />
				<Box display='flex' gap={1}>
					<Link
						component='button'
						onClick={() => {
							deleteNote(note.id);
						}}
					>
						<DeleteIcon fontSize='small' />
					</Link>
					<Link component='button'>
						<EditIcon fontSize='small' />
					</Link>
				</Box>
			</Box>
		</Card>
	);
};
