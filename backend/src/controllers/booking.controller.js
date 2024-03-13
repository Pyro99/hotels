import { Booking } from "../models/booking.model.js";

const getBookingHistory = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const bookings = await Booking.find({ user: userId }).populate('hotel');
  
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error getting booking history:', error);
      res.status(500).json({ message: 'Failed to get booking history' });
    }
  }

  const getBookingsByUserId = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const bookings = await Booking.find({ user: userId }).populate('hotel');
  
      res.json(bookings);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
      res.status(500).json({ message: 'Failed to fetch bookings' });
    }
  };
  

  



  export {getBookingHistory,getBookingsByUserId}