import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Homepage/Homepage';
import Wishlist from '../Components/Wishlist/Wishlist';
import Register from '../Components/Register/Register';
import ContactUs from '../Components/ContactUs/ContactUs';
import ProductPage from '../Components/ProductPage/ProductPage';
import Sell_Categories from '../Components/Sell_Categories/Sell_Categories';
import Electrical from '../Components/SellingForms/Electrical';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selling-page" element={<Sell_Categories />} />
        <Route path='/product-page/:productId' element={<ProductPage />} />
        <Route path='/electrical-appliance' element={<Electrical />} />
      </Routes>
    </>
  )
}

export default AllRoutes