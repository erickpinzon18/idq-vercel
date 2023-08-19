// Validate if the environment is development or production
if (process.env.NODE_ENV !== 'production') {
    const dotenv = import('dotenv');
    dotenv.config();
}

export const MONGO_CONNECTION_LINK = process.env.MONGO_CONNECTION_LINK; 
export const FILE_SERVER = process.env.FILE_SERVER; 