import React, { useState, useEffect} from 'react'
import Resource from './Resource'
import Loading from './Loading'
import { useGlobalContext } from '../../context'

const url = 'https://swapi.dev/api/people/'


const PeopleList = () => {
  //const { resources, loading } = useGlobalContext()
  const [loading, setLoading] = useState(true)
  const [people, setPeople] = useState([])
  console.log("this are the people: ",people)  
 /*  if(loading){
    return <Loading />
  } */

  const fetchResources = async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}`) 
      const data = await response.json()
      console.log(data)
      const { results } = data
      
       if(results){
        const newPeople = results.map((item) => {
          const { 
            height,
            name, 
            eye_color,
            birth_year,
          } = item
          return { 
            id: `${name}${height}`,
            height: height,
            name : name, 
            eye: eye_color,
            birthday: birth_year,
          }
        })
        console.log("this are the new :",newPeople)
        setPeople(newPeople)
      }else{
        setPeople([])
      }
    } catch (error){
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchResources()
  },[])

  /* if(results.lenght < 1){
     return(
      <h2 className="section-title">
        no Carachters to show
      </h2>
     ) 
  } */

  return (
    <section className="section">
      <h2 className="section-title">
        All Characters
       </h2>
      <div className="cocktails-center">
       {/*  {resources.map((item)=>{
          
          return <div key={item} {...item} />
        })} */}
      </div>
      </section>
   )
}

export default PeopleList