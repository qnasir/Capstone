import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product'
import './Homepage.css'

function Homepage() {
    return (

        <div className='homepage'>
            <div className='flex'>
                <Sidebar />
                <Product />
            </div>
        </div>

    )
}

export default Homepage