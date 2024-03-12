import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AllRoutes from './AllRoutes/AllRoutes'


function App() {

  return (
    <div className='app'>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
