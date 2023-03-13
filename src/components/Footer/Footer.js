import React from 'react'
import FooterCard from './FooterCard'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram,faPinterest,faYoutube} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <footer>
            <div className='containerr'>
                <FooterCard cardHeading="Gym">
                    <div className="firstCard">
                        <p>5th flora, 700/D kings road, green lane New York-1782</p>
                        <a href="/">+10 367 826 2567</a>
                        <a href="/">contact@carpenter.com</a>
                        <div className="social">
                            <i><FontAwesomeIcon icon={faFacebookF} /></i>
                            <i><FontAwesomeIcon icon={faTwitter} /></i>
                            <i><FontAwesomeIcon icon={faInstagram} /></i>
                            <i><FontAwesomeIcon icon={faPinterest} /></i>
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </div>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Useful Links">
                    <div className="usefulLinks">
                        <a href="/">Pricing</a>
                        <a href="/">About</a>
                        <a href="/">Gallery  </a>
                        <a href="/">Contact</a>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Subscribe">
                    <div className="subscribe">
                        <div className="input">
                            <input type="text" placeholder="Enter your Email" />
                            <button>JOIN US</button>
                        </div>
                        <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                    </div>
                </FooterCard>
            </div>
            <div className="copyright">
                <p>Copyright ©2020 All rights reserved | Created By MARSharifi</p>
            </div>
        </footer>
    )
}

export default Footer