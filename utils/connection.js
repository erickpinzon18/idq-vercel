import { set, connect } from 'mongoose';

export async function connectMongoDB() {
    const { MONGO_CONNECTION_LINK } = process.env;

    set('strictQuery', false); // Para que no de error al hacer una consulta con un campo que no existe en la base de datos

    connect(MONGO_CONNECTION_LINK)
    .then(() => {
        console.log('Conexion correcta a mongoDB');
    })
    .catch((e) => {
        console.error(`Error ${e}`);
    });
}