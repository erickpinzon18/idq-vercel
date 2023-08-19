// import { config } from 'dotenv';
// config();

if (process.env.NODE_ENV != 'production') {
    const dotenv = await import('dotenv');
    dotenv.config();
}

export const MONGO_CONNECTION_LINK = process.env.MONGO_CONNECTION_LINK;
export const FILE_SERVER = process.env.FILE_SERVER;
export const PORT = process.env.PORT;