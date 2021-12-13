import React from 'react'
import { Link } from 'react-router-dom'

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

function getId(url) {
  return url.split('/')[url.split('/').length - 2]
}

const Person = ({id, name, eye, birthday }) => {
  return (
    <article className="person">
     <div className="img-container">
       <img src="" alt={name}/>
     </div>
      <div className="person-footer">
        <h3>{name}</h3>
        <h4>{eye}</h4>
        <h5>{birthday}</h5>
        <Link to={`/people/${id}`} className="btn btn primary">
          details
        </Link>
      </div>
    </article>
  )
}

export default Person