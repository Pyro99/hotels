/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { yourBookings } from "../redux/bookingSlice";
import { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import { useParams } from "react-router-dom";

const HotelCard = ({hotels}) => {
  const dispatch = useDispatch();
  const time = useSelector((store) => store.time);
  const[bookedHotel,setBookedHotel] = useState(null);
  const {id : userId} = useParams();
  

  const handleBookings = async (id) =>{
    if(bookedHotel === id) {
      console.log("Booking confirmed");
      setBookedHotel(null);
    } else {
      console.log("Booking Started");
      setBookedHotel(id);
      const hotel = hotels.filter(e => e._id === id);
      console.log(hotel[0]);
      dispatch(yourBookings(hotel[0]));
      console.log("Hotel Booked");
    }

    const bookingData = {
      isbooked:true,
      bookedBy:id,
      bookedOn: time.startTime,
      bookedTill:time.endTime,
      bookedFor:time.getDays
    }

    try{
    const updatedHotel = await fetch(`http://localhost:8000/hotel/hotels/${id}`,{
      method:"PATCH",
      body:JSON.stringify(bookingData),
      headers:{
        "Content-Type":"application/json"
      }
    });
    if(updatedHotel.ok) {
      console.log("Hotel Updating");
    } else {
      console.log("Failed to update hotel booking status")
    }

  }catch(err) {
    console.log("Error Updating Hotel");
  }

  try{
      const updateUser = await fetch(`http://localhost:8000/user/${userId}`,{
        method:"PATCH",
        body:JSON.stringify({
          bookingHistory : id
        }),
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(updateUser.ok) {
        console.log("Updating User");
      } else {
        console.log("Failed to update user booking history")
      }
  }catch(err) {
      console.log("Error Updating User");
  }
  
  }
  return (
    <div className="flex mx-10 mt-10 flex-wrap">
    {hotels.map(hotel => (
      <div className="w-1/4 my-5" key={hotel._id}>
      <div className="p-2 flex flex-col gap-4 items-center justify-center">
        <img className="w-full h-60 rounded-md object-cover" src={hotel.imageSrc} alt="hotel1" />
        <p className="font-semibold">{hotel.desc}</p>
        <button className=" w-full bg-blue-500 rounded-lg text-center font-bold"
          onClick={() =>handleBookings(hotel._id)}
        >{bookedHotel !== hotel._id ? "Book" : "Confirm Booking"}</button>
      </div>
      {bookedHotel === hotel._id && <DateRangePicker />}
      </div>
    ))}
    
    </div>
  )
}

export default HotelCard