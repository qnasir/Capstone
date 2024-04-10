import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AllRoutes from './AllRoutes/AllRoutes'
import ParentContext from './Context/ParentContext'

function App() {

  return (
    <ParentContext>
      <div className='app'>
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
      <ParentContext />
    </ParentContext>
  )
}

export default App
