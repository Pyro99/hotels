import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true
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
    isbooked :{
        type:Boolean,
        default:false
    },
    bookedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookedOn:{
        type:String,
    },
    bookedTill:{
        type:String
    },
    bookedFor:{
        type:String
    }
},{timestamps:true});


export const Hotel = mongoose.model('Hotel',hotelSchema);