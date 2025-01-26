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

	// Define the file paths
	const workOrderFilePath = path.join(
		__dirname,
		'../../utils/data/WorkOrderDetails.json'
	);

	const projectFilePath = path.join(
		__dirname,
		'../../utils/data/projectDetails.json'
	);

	// Parse the incoming data
	const inputData = JSON.parse(dataToWrite);

	// Process the work order data
	let rootNode = inputData.root;
	let convertedRoot = processWorkOrder(rootNode, true);

	// Process the project data
	let project = extractProject(rootNode);

	// Function to read JSON data from a file and parse it into an array
	function readDataFromFile(filePath: string): any[] {
		try {
			if (fs.existsSync(filePath)) {
				const fileData = fs.readFileSync(filePath, 'utf8');
				const parsedData = JSON.parse(fileData);

				// Ensure the parsed data is an array
				if (Array.isArray(parsedData)) {
					return parsedData;
				} else {
					console.warn(
						`Data in file ${filePath} is not an array. Initializing with empty array.`
					);
					return [];
				}
			} else {
				// If file does not exist, return an empty array
				return [];
			}
		} catch (err) {
			console.error(`Error reading file ${filePath}:`, err);
			return [];
		}
	}

	// Read existing work order data
	let existingWorkOrders: WorkOrder[] = readDataFromFile(workOrderFilePath);

	// Append the new work order data
	existingWorkOrders.push(convertedRoot);

	// Write the updated work order data back to the file
	fs.writeFile(
		workOrderFilePath,
		JSON.stringify(existingWorkOrders, null, 4),
		(err) => {
			if (err) {
				console.error('Error writing work order file:', err);
				return res
					.status(500)
					.json({ message: 'Error writing work order file' });
			}
			// Proceed to write project data after successfully writing work orders

			// Read existing project data
			let existingProjects: Project[] = readDataFromFile(projectFilePath);

			// Append the new project data
			existingProjects.push(project);

			// Write the updated project data back to the file
			fs.writeFile(
				projectFilePath,
				JSON.stringify(existingProjects, null, 4),
				(err) => {
					if (err) {
						console.error('Error writing project file:', err);
						return res
							.status(500)
							.json({ message: 'Error writing project file' });
					}
					// Send response after successfully writing both files
					res.status(200).json({
						message: 'Data received and appended successfully',
					});
				}
			);
		}
	);
};
