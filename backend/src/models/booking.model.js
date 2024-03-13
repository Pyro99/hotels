import mongoose from "mongoose";
import { Hotel } from "./hotel.model.js";

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
},
  hotel: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Hotel', 
    required: true 
},
  checkInDate: { 
    type: Number, 
    required: true 
},
  checkOutDate: { 
    type: Number, 
    required: true 
  }
});

export const Booking = mongoose.model('Booking', bookingSchema);

