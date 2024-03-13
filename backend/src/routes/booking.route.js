import { Router } from "express";
import {getBookingHistory,getBookingsByUserId} from "../controllers/booking.controller.js";

const router = Router();

router.get('/user/:userId', getBookingHistory);
router.get('/bookings/user/:userId', getBookingsByUserId)

export default router;