import React from 'react'
import './PricingCard.css'

const PricingCard = ({ cardTitle, cardPricing }) => {
    return (
        <div className="pricingCard">
            <div className="pricingTitle">
                <h3>{cardTitle}</h3>
                <h5>{cardPricing}</h5>
            </div>
            <div className="pricingInfo">
                <span>24h unlimited access</span>
                <span>Trainer Advice</span>
            </div>
            <div className="infoGrey">
                <span>Locker + Bathroom</span>
                <span>Personal trainer</span>
            </div>
            <button>JOIN US</button>
        </div>
    )
}

export default PricingCard