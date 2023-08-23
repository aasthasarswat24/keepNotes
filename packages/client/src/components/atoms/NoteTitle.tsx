import { Typography } from '@mui/material';

interface NoteTitleProps {
	children: React.ReactNode;
}
export const NoteTitle: React.FC<NoteTitleProps> = ({ children }) => {
	return <Typography variant='body1'>{children}</Typography>;
};
