import { Router } from "express";
import { createUser, getAllUsers, loginUser, getUserById } from "../controllers/user.controller.js";

const router = Router();

router.get('/user',getAllUsers);
router.post('/user/login', loginUser)
router.post('/user/signup', createUser)
router.get('/user/:userId',getUserById);



export default router;