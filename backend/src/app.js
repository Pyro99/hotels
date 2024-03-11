import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import hotelRouter from "./routes/hotels.route.js";

const app = express();

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get("/" , async (req, res) =>{
    res.json({message:"TEST!!"});
})


app.use('/user',userRouter);
app.use('/hotel',hotelRouter);

export {app};