import React from 'react'
import { Link } from 'react-router-dom'
import PeopleList from './PeopleList'
import SearchForm from './SearchForm'

const Home = () => {
  return (
    <main>
       <SearchForm />
       <PeopleList />
    </main>
  
  )
}

export default Home