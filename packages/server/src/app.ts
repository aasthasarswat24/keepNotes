import bodyParser from 'body-parser';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

import { router } from './routes';
import { ApplicationError } from './errors/application-error';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.use(
	(err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
		if (res.headersSent) {
			return next(err);
		}

		return res.status(err.status || 500).json({
			error: process.env.NODE_ENV === 'development' ? err : undefined,
			message: err.message,
		});
	}
);
