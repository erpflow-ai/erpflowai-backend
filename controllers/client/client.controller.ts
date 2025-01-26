import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';
import {
	extractProject,
	processWorkOrder,
	Project,
	WorkOrder,
} from '../../utils/parser';

export const recieveData = async (req: Request, res: Response) => {
	console.log(req.body);
	const dataToWrite = JSON.stringify(req.body, null, 2);
	const filePath = path.join(
		__dirname,
		'../../utils/data/WorkOrderDetails.json'
	);

	const projectFilePath = path.join(
		__dirname,
		'../../utils/data/projectDetails.json'
	);

	// fs.readFile(filePath, 'utf8', (err, data) => {
	//     if(err){
	//         return console.error({message: 'Error reading file'});
	//     }
	// }
	// );

	const inputData = JSON.parse(dataToWrite);

	let outputData: WorkOrder[] = [];
	let rootNode = inputData.root;
	let convertedRoot = processWorkOrder(rootNode, true);
	outputData.push(convertedRoot);

	let projectData: Project[] = [];
	let project = extractProject(rootNode);
	projectData.push(project);

	fs.writeFile(
		projectFilePath,
		JSON.stringify(projectData, null, 4),
		(err) => {
			if (err) {
				console.error('Error writing file:', err);
			}
		}
	);

	fs.writeFile(filePath, JSON.stringify(outputData, null, 4), (err) => {
		if (err) {
			console.error('Error writing file:', err);
			return res.status(500).json({ message: 'Error writing file' });
		}

		res.status(200).json({ message: 'Data received successfully' });
	});
};
