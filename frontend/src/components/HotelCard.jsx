/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCheckInDate, getCheckOutDate } from '../redux/timeSlice';

const HotelCard = ({hotels}) => {
  const time = useSelector((store) => store.time);
  const {id : userId} = useParams();
  const dispatch = useDispatch();


  const bookHotel = async(id) => {
    if(time.checkInDate !== 0 && time.checkOutDate !==0){
      const response = await fetch(`http://localhost:8000/api/${id}/book`,{
      method:"POST",
      body:JSON.stringify({
        userId,
        checkInDate : time.checkInDate,
        checkOutDate: time.checkOutDate
      }),
      headers:{
        "Content-Type": "application/json",
      }
    });
    const hotel = await response.json();
    if(hotel.error) {
      alert("Booking already exists for the specified dates. Kindly select new dates or try booking a different hotel")
    } else {
      alert("Hotel Booked Successfully")
    }
    dispatch(getCheckInDate(0));
    dispatch(getCheckOutDate(0));
  } else{
    alert("Please select the dates.")
  }
}

  return (
    <div className="flex flex-wrap">
    {hotels.map(hotel => (
      <div className="w-[30%] my-5" key={hotel._id}>
      <div className="p-2 flex flex-col gap-4 items-center justify-center">
        <img className="w-full h-60 rounded-md object-cover" src={hotel.imageSrc} alt={hotel.name} />
        <div className="flex items-center w-full justify-between font-bold text-xl">
        <p>{hotel.name}</p>
        <p>₹{hotel.price}</p>
        </div>
        <p className="font-semibold">{hotel.desc}</p>
        <button className="w-1/2 bg-blue-500 rounded-lg text-center font-bold py-1 px-2"
          onClick={() =>bookHotel(hotel._id)}
        >Book</button>
      </div>
      </div>
    ))}
    </div>
    )
}

export default HotelCard