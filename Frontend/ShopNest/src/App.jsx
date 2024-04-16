import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
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
