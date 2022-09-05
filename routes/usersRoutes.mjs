import { Router } from 'express';
import UsersController from '../controllers/UsersControllers.mjs';

const router = Router();

router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getOneUser);
router.post('/users', UsersController.createUser);

export default router;