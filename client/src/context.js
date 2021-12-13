import React, { useState, useContext, useEffect } from 'react'


const url = 'https://swapi.dev/api/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [resources, setResources] = useState([])

  


 /*  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  } */

  return (
    <AppContext.Provider 
      value={{
        loading, 
        resources, 
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )  
}
// making props available globally
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }