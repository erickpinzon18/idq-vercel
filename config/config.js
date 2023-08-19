// Validate if the environment is development or production

// export function config() {
//     if (process.env.NODE_ENV !== 'production') {
//         // Import dotenv if the environment is development with es6
//         import('dotenv').then((dotenv) => {
//             dotenv.config();
//         });
//     }
// }

// import dotenv from 'dotenv';
// dotenv.config();

export const MONGO_CONNECTION_LINK = process.env.MONGO_CONNECTION_LINK; 
export const FILE_SERVER = process.env.FILE_SERVER;
export const PORT = process.env.PORT;