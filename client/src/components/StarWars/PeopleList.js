import React, { useState, useEffect} from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../../context'
import Person from './Resources/Person'

const url = 'https://swapi.dev/api/people/'


const PeopleList = () => {
  //const { resources, loading } = useGlobalContext()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [people, setPeople] = useState([])

  const fetchResources = async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}`) 
      const data = await response.json()
      const { results } = data
      
       if(results){
        const newPeople = results.map((item) => {
          const { 
            height,
            name, 
            eye_color,
            birth_year,
            url,
          } = item
          return { 
            id: `${name}${height}`,
            name : name, 
            eye: eye_color,
            birthday: birth_year,
            url:url,
          }
        })
        console.log(newPeople)
        setPeople(newPeople)
        setLoading(false)
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
  },[searchTerm])

  if(loading){
    return <Loading />
  }

  if(people.lenght < 1){
     return(
      <h2 className="section-title">
        no Carachters to show
      </h2>
     ) 
  }

  return (
    <section className="section">
      <h2 className="section-title">
        All Characters
       </h2>
      <div className="resources-center">
       {people.map((person)=>{
          return <Person
          key={person.id} {...person} />
        })}
      </div>
      </section>
   )
}

export default PeopleList