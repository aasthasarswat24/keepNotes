interface Note {
	id: string;
	title: string;
	description: string;
	label: string;
	date: Date;
	time: string;
	color: string;
	completed: boolean;
	priority: 'high' | 'medium' | 'low';
	attachments: string[];
	reminders: Date[];
}
