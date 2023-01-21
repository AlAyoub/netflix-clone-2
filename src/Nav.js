import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import netflixlogo from './images/netflix.png';
import netflixavatar from './images/Netflix-avatar.jpg';

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate("/")}
                    className='nav__logo'
                    src={netflixlogo}
                    alt="Netflix Logo"
                />
                <img
                    onClick={() => navigate("/profile")}
                    className='nav__avatar'
                    src={netflixavatar}
                    alt="Netflix Avatar"
                />
            </div>
        </div >
    )
}

export default Nav