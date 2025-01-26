import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const getAllWorkOrders = (req: Request, res: Response) => {

    const filePath = path.join(__dirname, '../../utils/data/WorkOrderDetails.json');

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
