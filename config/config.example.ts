import dotenv from 'dotenv';
dotenv.config();
interface IConfig {
	db: string;
	port: number;
	frontend_url: string;
}
const config: IConfig = {
	db: 'erpflowai-db',
	port: parseInt(process.env.BACKEND_PORT ?? '3000'),
	frontend_url: `http://localhost:${process.env.FRONTEND_PORT ?? '8000'}`,
};

export default config;