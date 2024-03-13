import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import Login from "./components/Login"
import Bookings from "./components/Bookings"
import LandingPageLayout from "./layouts/LandingPageLayout"
import { useEffect } from "react"

const AppRoutes = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!id) {
      navigate('/login'); 
    }
  },[]);

  return (
    <Routes>
        <Route path="/:id" element={<LandingPageLayout />} />
        <Route path ="/login" element={<Login />} />
        <Route path="/:id/bookings" element={<Bookings />} />
    </Routes>
  )
}

export default AppRoutes