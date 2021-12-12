import React from 'react'
import Resource from './Resource'
import Loading from './Loading'
import { useGlobalContext } from '../../context'


const ResourceList = () => {
  const { resources, loading } = useGlobalContext()

  if(loading){
    return <Loading />
  }

   if(resources.lenght < 1){
     return(
      <h2 className="section-title">
        no Carachters to show
      </h2>
     ) 
  }

  return (
    <div>
      <h2>All Carachters</h2>
    </div>
  )
}

export default ResourceList