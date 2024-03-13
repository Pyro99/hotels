import { request } from "express";
import { Hotel } from "../models/hotel.model.js";
import { User } from "../models/user.model.js";
import { Booking } from "../models/booking.model.js";
import checkBookingAvailability from "../utils/checkBookingAvailability.js";

const createHotel = async (req,res) => {
     try{
    const{name,imageSrc,desc,price} =  req.body;
    const hotel = await Hotel.create({
        name,
        imageSrc,
        desc,
        price
        });
        
       res.status(201).json({message:"Hotel created successfully"});
    } catch(err) {
        console.log(`Error creating user`,err);
        res.status(500).json({message:"Error creating hotel"})
    }
};

const getAllHotels = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.error('Error getting hotels:', error);
      res.status(500).json({ message: 'Failed to get hotels' });
    }
  };


const getHotelsById = async(req,res) =>{
    try{
        const {id} = req.params;
        const hotels = await Hotel.findById(id);
        res.status(200).json({hotels});
    } catch(err) {
        res.status(500).json({message:"Error in finding hotel"})
    }
}

const bookHotel = async (req, res) => {
    try {
      const { hotelId } = req.params;
      const { userId, checkInDate, checkOutDate } = req.body;

      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        return res.status(404).send({ error: 'Hotel not found' });
      }
      const bookings = hotel.bookings;

      if(bookings.length) {
        for(const booking of bookings) {
          try {
            const bookingAvailability = await checkBookingAvailability(hotelId,checkInDate,checkOutDate)
            if(bookingAvailability) {
              return res.status(409).json({ error: 'Booking already exists.' });
            } else{
              const newBooking = new Booking({ hotel:hotelId, user:userId, checkInDate, checkOutDate });
              await newBooking.save();
              await Hotel.findByIdAndUpdate(hotelId, { $push: { bookings: newBooking._id } });
              await User.findByIdAndUpdate(userId, { $push: { bookingHistory: newBooking._id } });
              return res.status(201).json({ message: 'Hotel booked successfully', booking: newBooking });
            }
          } catch(err){
            console.log('Error fetching bookings',err);
          }
        }
      }
       
      const newBooking = new Booking({ hotel:hotelId, user:userId, checkInDate, checkOutDate });
      await newBooking.save();

        await Hotel.findByIdAndUpdate(hotelId, { $push: { bookings: newBooking._id } });
    
        await User.findByIdAndUpdate(userId, { $push: { bookingHistory: newBooking._id } });

        res.status(201).json({ message: 'Hotel booked successfully', booking: newBooking });
      
    } catch (error) {
      console.error('Error booking hotel:', error);
      res.status(500).json({ message: 'Failed to book hotel' });
    }
  };



  



export {createHotel,getAllHotels,bookHotel}