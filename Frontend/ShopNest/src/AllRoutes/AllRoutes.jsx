import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Homepage/Homepage';
import Wishlist from '../Components/Wishlist/Wishlist';
import Register from '../Components/Register/Register';
import ContactUs from '../Components/ContactUs/ContactUs';
import ProductPage from '../Components/ProductPage/ProductPage';
import Sell_Categories from '../Components/Sell_Categories/Sell_Categories';
import Electrical from '../Components/SellingForms/Electrical';
import Clothes from '../Components/SellingForms/Clothes'
import Furtiture from '../Components/SellingForms/Furniture'
import Gadgets from '../Components/SellingForms/Gadgets'
import Jobs from '../Components/SellingForms/Jobs'
import Mobiles from '../Components/SellingForms/Mobiles'
import Sports from '../Components/SellingForms/Sports'
import Stationary from '../Components/SellingForms/Stationary'
import Books from '../Components/SellingForms/Books'
import Laptop from '../Components/SellingForms/Laptop'
import Images from '../Components/SellingForms/Images'

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
      </Routes>
    </>
  )
}

export default AllRoutes