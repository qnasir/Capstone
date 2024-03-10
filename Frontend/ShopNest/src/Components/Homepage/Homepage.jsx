import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product'
import './Homepage.css'
function Homepage() {
    return (

        <div className='homepage'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <Product />
            </div>
        </div>

    )
}

export default Homepage