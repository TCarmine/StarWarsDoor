import React, { useState, useContext, useEffect } from 'react'


const url = 'https://swapi.dev/api/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [resources, setResources] = useState([])

  const fetchResources = async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}${searchTerm}`) 
      const data = await response.json()
      console.log(data)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchResources()
  },[searchTerm])

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