import React from 'react'
import Menu from './Menu'
import { useState } from "react";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes , faAlignRight} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assests/images/GymLogo.png";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>
            <div className="wrap">
                <img src={Logo} alt="" />
                <Menu openMenu={openMenu}/>
                <button>JOIN US</button>
                <i
                    onClick={toggleMenu}
                    id="burgerMenu"
                >
                    {openMenu ? <FontAwesomeIcon icon={faTimes} size="xl" />
                    :<FontAwesomeIcon icon={faAlignRight} size="xl"/>}
                </i>
            </div>
        </nav>
    )
}

export default Navbar