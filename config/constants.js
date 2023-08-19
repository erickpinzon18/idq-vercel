import dotenv from 'dotenv';
dotenv.config();

export const MONGO_CONNECTION_LINK = process.env.MONGO_CONNECTION_LINK;
export const FILE_SERVER = process.env.FILE_SERVER;
export const PORT = process.env.PORT;