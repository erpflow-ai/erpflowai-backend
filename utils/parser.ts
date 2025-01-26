// Define interfaces for the input data structure
export interface Node_1 {
	id: string;
	type: string;
	position: Position;
	data: NodeData;
	width?: number;
	height?: number;
	selected?: boolean;
	positionAbsolute?: Position;
	dragging?: boolean;
}

export interface Position {
	x: number;
	y: number;
}

export interface NodeData {
	label: string;
	details: NodeDetails;
}

export interface NodeDetails {
	id: string;
	duration?: string;
	cost?: string;
	bom?: string;
	stakeholders?: string;
	status?: string;
	bom_full: BomItemInput[] | Record<string, never>;
	subworkers: Node_1[];
}

export interface BomItemInput {
	item: string;
	price: number;
	vendor: string;
}

// Define interfaces for the output data structure
export interface WorkOrder {
	id: number;
	projectId: number;
	name: string;
	status: string;
	bomItems: BomItem[];
	totalBomCost: number;
	subWorkOrders: WorkOrder[];
}

export interface BomItem {
	id: number;
	name: string;
	price: number;
	vendor: string;
}

// Initialize counters for generating unique IDs
let workOrderIdCounter = 1;
let bomItemIdCounter = 1;

export function processWorkOrder(
	node: Node_1,
	isRoot = false,
	projectId: number | null = null
): WorkOrder {
	/**
	 * Recursively processes a work order node and its subwork orders,
	 * mapping the input data to the desired output format.
	 */
	let workOrder: WorkOrder = {
		id: workOrderIdCounter,
		projectId: 0,
		name: '',
		status: '',
		bomItems: [],
		totalBomCost: 0,
		subWorkOrders: [],
	};
	let currentWorkOrderId = workOrderIdCounter;
	workOrderIdCounter += 1;

	if (isRoot) {
		// The root work order has a projectId
		workOrder.projectId = currentWorkOrderId;
		projectId = workOrder.projectId;
	} else {
		if (projectId !== null) {
			workOrder.projectId = projectId;
		} else {
			throw new Error('projectId is null for a non-root work order');
		}
	}

	// Extracting the name from the 'label' field
	workOrder.name = node.data.label || '';

	// Extracting the status
	workOrder.status = node.data.details?.status || '';

	// Processing BOM items
	let bomFull = node.data.details?.bom_full || [];
	// Handle the case where bom_full might be an empty object
	if (typeof bomFull === 'object' && !Array.isArray(bomFull)) {
		bomFull = [];
	}
	let bomItems: BomItem[] = [];
	let totalBomCost = 0;
	for (let item of bomFull as BomItemInput[]) {
		let bomItem: BomItem = {
			id: bomItemIdCounter,
			name: item.item || '',
			price: item.price || 0,
			vendor: item.vendor || '',
		};
		bomItemIdCounter += 1;
		totalBomCost += bomItem.price;
		bomItems.push(bomItem);
	}
	workOrder.bomItems = bomItems;
	workOrder.totalBomCost = totalBomCost;

	// Processing subwork orders recursively
	let subworkers = node.data.details?.subworkers || [];
	let subWorkOrders: WorkOrder[] = [];
	for (let subworker of subworkers) {
		let subWorkOrder = processWorkOrder(subworker, false, projectId);
		subWorkOrders.push(subWorkOrder);
	}
	workOrder.subWorkOrders = subWorkOrders;

	return workOrder;
}

export interface Project {
	id: number;
	name: string;
	capital: number;
	duration: string;
	status: string;
	inventoryStatus: string;
	customer: string;
}

export function extractProject(rootNode: Node_1): Project {
	/**
	 * Extracts project information from the root node and maps it to the Project interface.
	 */
	let project: Project = {
		id: 1, // Assuming project ID starts from 1
		name: rootNode.data.label || '',
		capital: 0,
		duration: '',
		status: '',
		inventoryStatus: 'Unknown', // Default value
		customer: 'Unknown', // Default value
	};

	// Extract capital from cost (assuming it's in the format "$xxxxxx")
	let costStr = rootNode.data.details.cost || '';
	let capital = parseFloat(costStr.replace(/[^0-9.-]+/g, '')) || 0;
	project.capital = capital;

	// Extract duration
	project.duration = rootNode.data.details.duration || '';

	// Extract status
	project.status = rootNode.data.details.status || '';

	// Since 'inventoryStatus' and 'customer' are not provided in the input data,
	// we'll set default values or derive them if possible
	project.inventoryStatus = 'Partially Stocked'; // Example default
	project.customer = 'Client Co.'; // Example default

	return project;
}
