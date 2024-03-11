import { Router } from "express";
import { createUser, getAllUsers, loginUser, updateUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/',getAllUsers);
router.post('/login', loginUser)
router.post('/signup', createUser)
router.patch('/:id',updateUser);


export default router;