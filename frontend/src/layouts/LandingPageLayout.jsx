import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import HotelContainer from "../components/HotelContainer"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LandingPageLayout = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  useEffect(()=>{
    console.log(user);
    if(user === null) {
      navigate('/login'); 
    }
  });

  return (
    <div className="min-h-screen">
        <Header />
        <HotelContainer />
    </div>
  )
}

export default LandingPageLayout;