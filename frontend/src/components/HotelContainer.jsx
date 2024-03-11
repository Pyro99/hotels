import HotelCard from "./HotelCard";
// import hotels from "../utils/hotels"
import { useEffect, useState } from "react";

const HotelContainer = () => {
  const [hotels,setHotels] = useState(null);
  useEffect(()=>{
    getHotels();
  },[])

  const getHotels = async() =>{
    const data = await fetch('http://localhost:8000/hotel/hotels');
    const response = await data.json();
    console.log(response);
    setHotels(response);
  }

  return (
    <div>{hotels && <HotelCard hotels={hotels} />}</div>
  )
}

export default HotelContainer