import React from 'react'
import './style.css'

function Card({picture, name, age, address, phone_number}) {
  
  if (!picture || !name || !age || !address ||!phone_number) {
    return null;
  }
  const imagePath = require(`../../images/${picture}`)
  return (
    <div className="card-container" data-testid="card">
        <img className="user-avatar" src={imagePath} alt=""/>
    <div className="sub-container">
        <div className="label">
            {name}, {age}, {phone_number}
        </div>
        <p className="description">
            {address}
        </p>
    </div>
    
    </div>
  )
}

export default Card