import { Routes, Route } from 'react-router-dom';
import Home from '../components/Homepage/Homepage';
import Wishlist from '../components/Wishlist/Wishlist';
import Register from '../components/Register/Register';
import ContactUs from '../components/ContactUs/ContactUs';
import ProductPage from '../components/ProductPage/ProductPage';
import Sell_Categories from '../components/Sell_Categories/Sell_Categories';
import Electrical from '../components/SellingForms/Electrical';
import Clothes from '../components/SellingForms/Clothes'
import Furtiture from '../components/SellingForms/Furniture'
import Gadgets from '../components/SellingForms/Gadgets'
import Jobs from '../components/SellingForms/Jobs'
import Mobiles from '../components/SellingForms/Mobiles'
import Sports from '../components/SellingForms/Sports'
import Stationary from '../components/SellingForms/Stationary'
import Books from '../components/SellingForms/Books'
import Laptop from '../components/SellingForms/Laptop'
import Images from '../components/SellingForms/Images'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup';
import Geolocation from '../components/Geolocation/Geolocation'
import UserDashboard from '../components/UserDashboard/UserDashboard';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist/:userId" element={<Wishlist />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/selling-page" element={<Sell_Categories />} />
        <Route path='/product-page/:productId' element={<ProductPage />} />
        <Route path='/selling-page/electrical-appliance' element={<Electrical />} />
        <Route path='/selling-page/books' element={<Books />} />
        <Route path='/selling-page/stationary' element={<Stationary />} />
        <Route path='/selling-page/sports' element={<Sports />} />
        <Route path='/selling-page/mobiles' element={<Mobiles />} />
        <Route path='/selling-page/jobs' element={<Jobs />} />
        <Route path='/selling-page/gadgets' element={<Gadgets />} />
        <Route path='/selling-page/furniture' element={<Furtiture />} />
        <Route path='/selling-page/clothes' element={<Clothes />} />
        <Route path='/selling-page/laptop' element={<Laptop />} />
        <Route path='/selling-page/upload-images' element={<Images />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/selling-page/address' element={<Geolocation />} />
      </Routes>
    </>
  )
}

export default AllRoutes