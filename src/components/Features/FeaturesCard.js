import React from 'react'

import './FeaturesCard.css'

const FeaturesCard = ({ featureImg, featureHeading, featureInfo }) => {
  return (
    <div className="featureCard">
      <img src={featureImg} alt="" />
      <h3>{featureHeading}</h3>
      <p>{featureInfo}</p>
    </div>
  )
}

export default FeaturesCard