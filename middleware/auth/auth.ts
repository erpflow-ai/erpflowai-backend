import { NextFunction, Request, Response } from 'express';

const auth = false;

const isUserAuthenticated = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// if (!auth) {
	// 	return res.status(401).json({ message: 'User is not authenticated' });
	// }
	console.log('User Authenticated');
	next();
};

export default isUserAuthenticated;
