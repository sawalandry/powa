import React from 'react'

const Back = ({ name, title, cover }) => {
  return (
    <div>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt={name} />
      </div>
    </div>
  )
}

export default Back