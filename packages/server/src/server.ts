import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
	dotenv.config({ path: '.env' });
}

import { app } from './app';

app.listen(app.get('port'), (): void => {
	console.log(
		'\x1b[36m%s\x1b[0m',
		`🌏 Express server started at http://localhost:${app.get('port')}`
	);
});
