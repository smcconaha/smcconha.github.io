import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";
import logo from '../components/images/Logo.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container">
            <img className="navbar-brand" src={logo} alt='logo'/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link smooth={true} to="home" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="about"  className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="portfolio"  className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="blog"  className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="contact"  className="nav-link">Contact Me</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
