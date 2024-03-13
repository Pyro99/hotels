import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";

const HotelContainer = () => {
  const [hotels,setHotels] = useState(null);
  useEffect(()=>{
    getHotels();
  },[])

  const getHotels = async() =>{
    const data = await fetch('http://localhost:8000/api/hotels');
    const response = await data.json();
    setHotels(response);
  }

  return (
    <div className="mt-14 px-14 w-full">{hotels && <HotelCard hotels={hotels} />}</div>
  )
}

export default HotelContainer