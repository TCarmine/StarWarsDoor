
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const rootUrl = 'https://swapi.dev/api/'

const films = 'people'

const  GithubContext = React.createContext()

// Provide, Consumer - GithubContext.Provider

const GithubProvider = ({children})=>{
  // request loading
  const [request, setRequest] = useState(0)
  const [loading, setIsLoading] = useState(false)
  
 

  const checkRequest = () => {
    axios({data} =>{ 
        console.log()
    }).then((response)=>{
      console.log()
    }).catch((err)=> console.log(err))
  }

  // manage first loading
  useEffect(()=>{
    checkRequest()
  },[])

  return (
    <GithubContext.Provider value={"Loading different attributes"}>
      {children}
    </GithubContext.Provider>
  )  
}

export{GithubProvider, GithubContext}