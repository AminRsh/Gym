import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './TrainerCard.css'



const TrainerCard = ({ trainerName, trainerType, trainerImg }) => {
    return (
        <div className="trainerCard">
            <div className="trainerBgImage" style={{ background: `url('${trainerImg}') no-repeat center/cover` }}>
                <div className="social">
                    <span href='facebook.com'><FontAwesomeIcon icon={faFacebook} color="#eee!important" size='2xl'/></span> 
                    <span href='facebook.com'><FontAwesomeIcon icon={faTwitter} color="#eee" size='2xl'/></span> 
                    <span href='facebook.com'><FontAwesomeIcon icon={faInstagram} color="#eee" size='2xl'/></span> 
                </div>
            </div>
            <h3>{trainerName}</h3>
            <span className='gender'>{trainerType}</span>
        </div>
    )
}

export default TrainerCard