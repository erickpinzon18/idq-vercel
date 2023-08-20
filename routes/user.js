import { Router } from 'express';
import { getUser } from '../controllers/users.js';
import { newUser } from '../controllers/users.js';
import { newContact } from '../controllers/users.js';
import { newDoc } from '../controllers/users.js';

export const router = Router();

router.get('/', (req, res) => {res.send('Hello World!')});
router.post('/getUser/:idq', getUser);
router.post('/newUser', newUser);
router.post('/newContact', newContact);
router.post('/newDoc', newDoc);
