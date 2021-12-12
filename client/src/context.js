import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://swapi.dev/api/people/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [resources, setResources] = useState([])
  
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