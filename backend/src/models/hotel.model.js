import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    imageSrc:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking' 
    }]   
});



export const Hotel = mongoose.model('Hotel',hotelSchema);