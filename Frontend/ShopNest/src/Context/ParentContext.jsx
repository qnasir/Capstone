import React, {useState} from 'react'
import { createContext } from 'react'


export const AppContext = createContext();

function ParentContext({children}) {

    const [filteredProducts, setFilteredProducts] = useState([])

  return (
    <AppContext.Provider value = {{filteredProducts, setFilteredProducts}}>
        {children}
    </AppContext.Provider>
  )
}

export default ParentContext