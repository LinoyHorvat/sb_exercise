import React from 'react'
import './style.css'
import image1 from './../../images/image1.png'

const importImageFolder = (pictureURL) => {
}

function Card({picture, name, age, address, phone_number}) {
  const imagePath = require(`../../images/${picture}`)
  return (
    <div className="container">
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