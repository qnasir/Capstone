import React, {useState} from 'react'
import { createContext } from 'react'


export const AppContext = createContext();

function ParentContext({children}) {

    const [filteredProducts, setFilteredProducts] = useState([])
    const [ latitude, setLatitude ] = useState()
    const [ longitude, setLongitude ] = useState()

  return (
    <AppContext.Provider value = {{filteredProducts, setFilteredProducts, latitude, setLatitude, longitude, setLongitude}}>
        {children}
    </AppContext.Provider>
  )
}

export default ParentContext