import { Request, Response } from 'express';

export const getClubs = (req: Request, res: Response) => {
	res.status(200).json({ message: 'Here are a few clubs' });
};
