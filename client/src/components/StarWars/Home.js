import React from 'react'
import { Link } from 'react-router-dom'
import ResourceList from './PeopleList'
import SearchForm from './SearchForm'

const Home = () => {
  return (
    <main>
       <SearchForm />
       <ResourceList />
    </main>
  
  )
}

export default Home