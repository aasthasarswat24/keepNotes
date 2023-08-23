import { Typography } from '@mui/material';

interface NoteDescriptionProps {
	children: React.ReactNode;
}
export const NoteDescription: React.FC<NoteDescriptionProps> = ({
	children,
}) => {
	return <Typography variant='body1'>{children}</Typography>;
};
