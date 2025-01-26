import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const updateProjects = (req: Request, res: Response) => {
	const filePath = path.join(
		__dirname,
		'../../utils/data/workorderdetails.json'
	);

	// Read the existing data from the JSON file
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			return res.status(500).json({ message: 'Error reading file' });
		}

		let workorderDetails;
		try {
			workorderDetails = JSON.parse(data);
		} catch (parseErr) {
			return res.status(500).json({ message: 'Error parsing JSON' });
		}

		// Append new data to the existing data
		const newClub = {
			id:
				workorderDetails.clubs.length > 0
					? workorderDetails.clubs[workorderDetails.clubs.length - 1].id +
						1
					: 1,
			...req.body,
		};

		workorderDetails.clubs = workorderDetails.clubs || [];
		workorderDetails.clubs.push(newClub);

		// Write the updated data back to the JSON file
		fs.writeFile(
			filePath,
			JSON.stringify(workorderDetails, null, 2),
			(writeErr) => {
				if (writeErr) {
					return res.status(500).json({ message: 'Error writing file' });
				}

				res.status(200).json({
					message: 'Club added successfully',
					club: newClub,
				});
			}
		);
	});
};

export const getAllProjects = (req: Request, res: Response) => {
	const filePath = path.join(
		__dirname,
		'../../utils/data/projectDetails.json'
	);

	// Read the existing data from the JSON file
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			return res.status(500).json({ message: 'Error reading file' });
		}

		let workorderDetails;
		try {
			workorderDetails = JSON.parse(data);
		} catch (parseErr) {
			return res.status(500).json({ message: 'Error parsing JSON' });
		}

		res.status(200).json(workorderDetails);
	});
};
