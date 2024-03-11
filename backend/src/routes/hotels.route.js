import { Router } from "express";
import { createHotel, getAllHotels, getHotelsById, updateHotels } from "../controllers/hotel.controller.js";

const router = Router();

router.get('/hotels/:id',getHotelsById)
router.post('/hotels',createHotel)
router.get('/hotels',getAllHotels)
router.patch('/hotels/:id',updateHotels);



export default router;