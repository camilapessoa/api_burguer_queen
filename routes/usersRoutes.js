import { Router } from 'express'; // por que é desestruturado?
import UsersController from '../controllers/UsersControllers.js';

const router = Router();

router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getOneUser);
router.post('/users', UsersController.createUser);

export default router;