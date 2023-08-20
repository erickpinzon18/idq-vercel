import { Router } from 'express';
import { getUser } from '../controllers/users.js';

const router = Router();

router.get('/', (req, res) => {res.send('Hello World!')});
router.post('/getUser/:idq', getUser);
router.post('/newUser', newUser);
router.post('/newContact', newContact);
router.post('/newDoc', newDoc);
