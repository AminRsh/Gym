import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './TrainerCard.css'



const TrainerCard = ({ trainerName, trainerType, trainerImg }) => {
    return (
        <div className="trainerCard">
            <div className="trainerBgImage" style={{ background: `url('${trainerImg}') no-repeat center/cover` }}>
                <div className="social">
                    <a href="facebook.com"><i><FontAwesomeIcon icon={faFacebookF} color="#eee!important" size='xl'/></i> </a>
                    <a href="twitter.com"><i><FontAwesomeIcon icon={faTwitter} color="#eee" size='xl'/></i> </a>
                    <a href="instagram.com"><i><FontAwesomeIcon icon={faInstagram} color="#eee" size='xl'/></i> </a>
                    
                </div>
            </div>
            <h3>{trainerName}</h3>
            <span className='gender'>{trainerType}</span>
        </div>
    )
}

export default TrainerCard