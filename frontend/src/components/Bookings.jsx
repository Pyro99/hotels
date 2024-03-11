import { useSelector } from "react-redux"
// import HotelCard from "./HotelCard";
import Header from "./Header";
// import HotelContainer from "./HotelContainer"

const Bookings = () => {
  const hotels = useSelector((store) => store.booking)
  console.log("bookings : ",hotels.bookings);
  return (

    <div>
      <Header />
      {hotels.bookings.length == 0 ? (
        <h1>NO Bookings</h1>
      ) : (
        <div className=" mx-10 flex gap-5">
       {hotels.bookings.map(hotel => (
          <div className="w-1/4 my-5" key={hotel.id}>
          <div className="p-2 flex flex-col gap-4 items-center justify-center">
            <img className="w-full h-60 rounded-md object-cover" src={hotel.imageSrc} alt="hotel1" />
            <p className="font-semibold">{hotel.desc}</p>
          </div>
          </div>
        ))}
        </div>
      )} 
    </div>
  )
}

export default Bookings