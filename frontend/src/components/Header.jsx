import { Link, useParams } from "react-router-dom"

const Header = () => {
  const {id} = useParams();
  return (
    <div className="border-b-2 border-b-blue-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to={"/"+id} 
              className="text-3xl font-bold tracking-tight text-blue-500">Hotels</Link>
            <div className="flex gap-10">
             <Link to='bookings'><button className="font-bold hover:text-blue-500">Your Bookings</button></Link>
            <button  
              className="font-bold hover:text-blue-500">
            <Link to='/login'>Log Out</Link>
        </button>
           </div>
        </div>
    </div>
  )
}

export default Header