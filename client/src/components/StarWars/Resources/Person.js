import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

function getId(url) {
  return url.split('/')[url.split('/').length - 2]
}

const Person = ({id, name, eye, birthday, url }) => {
  return (
    <article className="person">
     <div className="img-container">
       <img src={`#${name}`} onClick={() => getId(url)} alt={name}/>
     </div>
      <div className="person-footer">
        <h3>{name}</h3>
        <h4>eyes's color: {eye}</h4>
        <h5>birthday : {birthday}</h5>
        <button> 
          <Link to={`/people/${id}`} className="btn btn primary">
          details
          </Link>
        </button> 
      </div>
    </article>
  )
}



export default Person