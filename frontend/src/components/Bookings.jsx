import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Bookings = () => {
  const[userBookings, setUserBookings] = useState(null);
  const {id} = useParams();
  
  useEffect(()=>{
  getBookingsByUser(); 
  },[])

  const getBookingsByUser = async() =>{
    const response = await fetch(`http://localhost:8000/api/bookings/user/${id}`);
    const data = await response.json();
    setUserBookings(data);
  }
  return (

    <div className="bg-[#212121] min-h-screen text-white">
      <Header /> 
       {userBookings && (
       <div className=" mx-10 flex gap-5 flex-wrap">
       {userBookings.map(data => (
          <div className="w-1/4 my-5" key={data?.hotel?.id}>
          <div className="p-2 flex flex-col gap-4 items-center justify-center">
            <img className="w-full h-60 rounded-md object-cover" src={data?.hotel?.imageSrc} alt="{data.hotel.name}" />
            <div className="flex items-center w-full justify-between font-bold text-xl">
            <p>{data?.hotel?.name}</p>
            <p>₹{data?.hotel?.price}</p>
            </div>
            <p className="font-semibold">{data.hotel.desc}</p>
          </div>
          </div>
        ))}
        </div>
      )}  
    </div>
  )
}

export default Bookings