import React from 'react'
import { Link } from 'react-router-dom'

const Resource = ({item}) => {
  return (
    <article>
      <h2>All listed</h2>
      <div>
        <h3>{item}</h3>
      </div>
     
    </article>
  )
}

export default Resource