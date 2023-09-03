import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import { ApplicationError } from './errors/application-error';
import { router } from './routes';

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