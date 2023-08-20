import * as path from 'node:path';
import multer from 'multer';
import { userModel } from '../models/user.js';

const uploadFilePath = 'resources/';

const EXTENSIONS = [
    '.png', '.jpg', '.jpeg', '.pdf'
]
const MIME_TYPES = [
    'image/png', 'image/jpg', 'image/jpeg', 'application/pdf'
]

const storageFile = multer.diskStorage({
  destination: uploadFilePath,
  filename(req, file, fn) {
    fn(null, `${new Date().getTime().toString()}-${file.fieldname}${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({
  storage: storageFile,
  limits: { fileSize: 5 * 1024 * 1024 },
  async fileFilter(req, file, callback) {
    console.log(req.body);
    console.log(req.body.idq);
    console.log(req.body.password);
    const userBD = await userModel.findOne({ idq: req.body.idq, password: req.body.password });

    //console.log(userBD);
    if (!userBD) {
        callback(new Error('Usuario no válido'), false);
        return;
    }

    const extension = EXTENSIONS.indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
    const mimeType = MIME_TYPES.indexOf(file.mimetype) >= 0;
    
    if (extension && mimeType) {
        return callback(null, true);
    }
    
    callback(new Error('Sólo es posible cargar archivos de tipo: png, jpg, jpeg, pdf'), false);
  },
}).single('file');

export async function handleSingleUploadFile(req, res) {
  return new Promise((resolve, reject) => {
    uploadFile(req, res, (error) => {
      if (error) {
        reject(error);
      }
      resolve({ file: req.file, body: req.body });
    });
  });
};