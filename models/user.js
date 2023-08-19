import { Schema, model } from "mongoose";
import { FILE_SERVER } from '../config/constants.js';

export const userModel = model('users', new Schema({
    idq: {
        type: Schema.Types.String,
        required: [true, 'El idq es obligatorio']
    },
    name: {
        type: Schema.Types.String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: Schema.Types.String,
    },
    user: {
        type: Schema.Types.String,
        required: [true, 'El usuario es obligatorio']
    },
    password: {
        type: Schema.Types.String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: Schema.Types.String,
        get: (img) => {
            if (!img) {
                return `${FILE_SERVER}/resources/no-image.png`;
            }
            return `${FILE_SERVER}/resources/${img}`;
        }
    },
    trustedContacts: [
        {
            name: {
                type: Schema.Types.String,
                required: [true, 'El nombre es obligatorio']
            },
            relationship: {
                type: Schema.Types.String,
                required: [true, 'La relación es obligatoria']
            },
            phone: {
                type: Schema.Types.String,
                required: [true, 'El teléfono es obligatorio']
            },
            idq: {
                type: Schema.Types.String
            }
        }
    ],
    type: { 
        type: Schema.Types.String,
        required: [true, 'El tipo de usuario es obligatorio']
    },
    docs: [
        {
            docType: {
                type: Schema.Types.String,
                required: [true, 'El tipo de documento es obligatorio']
            },
            file: {
                type: Schema.Types.String,
                required: [true, 'El archivo es obligatorio']

            },
            // get: (doc) => {
            //     if (!doc) {
            //         return `${FILE_SERVER}/resources/no-image.png`;
            //     }
            //     return `${FILE_SERVER}/resources/${doc}`;
            // }
        }
    ]
}));