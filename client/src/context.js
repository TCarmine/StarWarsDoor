import React, { useState, useContext, useEffect } from 'react'


const url = 'https://swapi.dev/api/'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [resources, setResources] = useState([])

  const fetchResources = async () => {
    try{
      const response = await fetch(`${url}${searchTerm}`) 
      const data = await response.json()
      console.log(data)

      const {allList} = data

      if(allList){
        const rootList = allList.map((item)=>{
        const { films, people, planets, species, starships, vehicles } = item
          return { 
            films, 
            people, 
            planets, 
            species, 
            starships, 
            vehicles 
          }
        })
        setResources([rootList])
        
      }else{
        setResources([])
      }
      setLoading(false)
    } catch (error){
      console.log(error)
      setLoading(false)
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