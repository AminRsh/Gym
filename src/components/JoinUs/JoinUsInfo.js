import React from 'react'
import './JoinUsInfo.css'

const JoinUsInfo = ({ title, info }) => {
  return (
      <div className="joinUsInfo">
          <h3>{title}</h3>
          <p>{info}</p>
          <button>JOIN US</button>
      </div>
  )
}


export default JoinUsInfo