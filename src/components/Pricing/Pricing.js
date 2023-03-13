import React from 'react'
import PricingCard from './PricingCard'
import './Pricing.css'

const Pricing = () => {
    return (
        <section className="pricing" id='pricing'>
            <div className="container">
                <div className="heading">
                    <h2>OUR PRICING</h2>
                    <p>There are many variations of passages of lorem Ipsum available, 
                    but the majority have suffered alteration.</p>
                </div>
                <div className="wrapper">
                    <PricingCard cardTitle="BEGINNER" cardPricing="$45/m" />
                    <PricingCard cardTitle="EXPERT" cardPricing="$45/m" />
                    <PricingCard cardTitle="PRO" cardPricing="$45/m" />
                </div>
            </div >
        </section>
    )
}

export default Pricing