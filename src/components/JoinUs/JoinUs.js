import React from 'react'
import JoinUsInfo from "./JoinUsInfo";
import './JoinUs.css'

const JoinUs = () => {
    return (
        <section className="joinUs" id="join">
            <div className="wrap">
                <div className="img1">
                    <JoinUsInfo title="FOR WOMEN" info="There are many variations of passages
                    of lorem Ipsum available, but the majority have suffered alteration." />
                </div>
            </div>
            <div className="wrap">
                <div className="img2">
                    <JoinUsInfo title="FOR GUYS" info="There are many variations of passages 
                    of lorem Ipsum available, but the majority have suffered alteration." />
                </div>
            </div>
        </section>
    )
}

export default JoinUs