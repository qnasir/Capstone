import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Homepage/Homepage';
import Wishlist from '../Components/Wishlist/Wishlist';
import Register from '../Components/Register/Register';
import ContactUs from '../Components/ContactUs/ContactUs';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default AllRoutes