import Dates from "../components/Dates";
import Header from "../components/Header"
import HotelContainer from "../components/HotelContainer"

const LandingPageLayout = () => {
  return (
    <div className="min-h-screen bg-[#212121] text-white relative">
        <Header />
        <div className="absolute">
        <Dates />
        </div>
        <HotelContainer />
    </div>
  )
}

export default LandingPageLayout;