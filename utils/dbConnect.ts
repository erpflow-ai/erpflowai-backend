import mongoose from 'mongoose';

const dbConnect = async (dbName: string) => {
	try {
		const uri: string = process.env.MONGODB_URI + dbName;
		await mongoose.connect(uri);
		console.log(`Successfully connected to database: ${dbName}`);
	} catch (error) {
		console.log('Error while connecting to the database');
		console.log(error);
		process.exit(1);
	}
};

export default dbConnect;
