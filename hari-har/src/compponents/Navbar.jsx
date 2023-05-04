import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [shoMediaIcon, setShowMediaIcon] = useState(false);
    function media(){
        setShowMediaIcon(!shoMediaIcon);
    }
    return (
        <>
            <nav className='main_div'>
                <div className="logo">
                    <img src="image/logo.png" alt="" className='logo_img' />
                </div>
                <div className={shoMediaIcon ? 'menu-link mobile-menu-link ' : "menu-link"}>
                    <ul>
                        <li><a href="#home" className='navbar_link' onClick={media}>Home</a></li>
                        <li><a href="#about" className='navbar_link' onClick={media}>About</a></li>
                        <li><a href="#service" className='navbar_link' onClick={media}>Service</a></li>
                        <li><a href="#contact" className='navbar_link' onClick={media}>Contact</a></li>
                    </ul>
                </div>
                <div className='hamburgur-menu'>
                    <Link onClick={media}>
                        <GiHamburgerMenu />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
