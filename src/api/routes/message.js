import {Router} from 'express';
import MessageController from '../controllers/MessageController.js';

const router = Router();

router.get('/message', MessageController.message);
router.get('/messageloop', MessageController.messageLoop);
router.get('/evenodd/:num', MessageController.evenOdd);

export default router;