import './Product.css'
import SearchBar from './SearchBar/SearchBar'
import Products from './Products/Products';
import List from '../List';


    function Product() {

    return (
        <div className='main_container'>

            <SearchBar />

            <List />

        </div>
    )
}

export default Product