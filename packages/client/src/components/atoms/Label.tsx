import Chip from '@mui/material/Chip';

interface LabelProps {
	category: string;
}

export const Label: React.FC<LabelProps> = ({ category }) => {
	return <Chip size='small' variant='filled' label={category} />;
};
