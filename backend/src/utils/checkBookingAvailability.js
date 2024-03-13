import { Booking } from "../models/booking.model.js";

const checkBookingAvailability = async(hotelId,checkInDate, checkOutDate) => {
    try {
      const existingBooking = await Booking.findOne({
        hotel: hotelId,
        $or: [
          {
            checkInDate: { $lt: checkOutDate },
            checkOutDate: { $gt: checkInDate }
          },
          {
            checkInDate: { $gte: checkInDate, $lt: checkOutDate },
            checkOutDate: { $lte: checkOutDate, $gt: checkInDate }
          },
          {
            checkInDate: { $lte: checkInDate },
            checkOutDate: { $gte: checkOutDate }
          }
        ]
      });

      return !!existingBooking;
    } catch (err) {
      console.error('Error checking booking availability:', err);
      throw err;
    }
  }


  export default checkBookingAvailability;