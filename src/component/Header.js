import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="./image/logo.jpg" alt="#" />
            </div>
            <div className="navbar">
                <ul className='navlist'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div className="navbutton">
                <AiOutlineMenu className='open navbtn' />
                <AiOutlineClose className='close navbtn' />
            </div>
        </div>
    )
}

export default Header