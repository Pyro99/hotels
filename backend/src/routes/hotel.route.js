import { Router } from "express";
import { createHotel, getAllHotels, bookHotel} from "../controllers/hotel.controller.js";

const router = Router();

router.post('/hotels',createHotel);
router.get('/hotels',getAllHotels);
router.post('/:hotelId/book',bookHotel);





export default router;