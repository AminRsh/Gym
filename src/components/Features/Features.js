import React from 'react'
import Features1 from "../../assests/images/features1.svg";
import Features2 from "../../assests/images/features2.svg";
import Features3 from "../../assests/images/features3.svg";
import Features4 from "../../assests/images/features4.svg";
import FeaturesCard from './FeaturesCard';
import './Features.css'

const Features = () => {
    return (
        <section className="features" id='features'>
            <div className="container">
                <div className="heading">
                    <h2>OUR FEATURES</h2>
                    <p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className="featureWrapper">
                    <FeaturesCard featureImg={Features1} featureHeading="Weightlifting" featureInfo="There are many variations of passages of lorem Ipsum available." />
                    <FeaturesCard featureImg={Features2} featureHeading="Specific Muscles" featureInfo="There are many variations of passages of lorem Ipsum available." />
                    <FeaturesCard featureImg={Features3} featureHeading="Flex Your Muscles" featureInfo="There are many variations of passages of lorem Ipsum available." />
                    <FeaturesCard featureImg={Features4} featureHeading="Cardio Exercises" featureInfo="There are many variations of passages of lorem Ipsum available." />
                </div>
            </div >
        </section>
    )
}

export default Features