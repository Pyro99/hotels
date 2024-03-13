import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import hotelRouter from "./routes/hotel.route.js";
import bookingRouter from "./routes/booking.route.js";
const app = express();

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get("/" , async (req, res) =>{
    res.json({message:"TEST!!"});
})


app.use('/api',userRouter);
app.use('/api',hotelRouter);
app.use('/api',bookingRouter);

export {app};