import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Bookings from "./components/Bookings"
import LandingPageLayout from "./layouts/LandingPageLayout"
import DateRangePicker from "./components/DateRangePicker"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/:id" element={<LandingPageLayout />} />
        <Route path ="/login" element={<Login />} />
        <Route path="/:id/bookings" element={<Bookings />} />
        <Route path="/date" element={<DateRangePicker />} />
    </Routes>
  )
}

export default AppRoutes