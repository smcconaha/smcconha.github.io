import React from 'react';
import {Link} from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1>Full Stack Web developer</h1>
            <h2>Web development and project management</h2>
            <Link smooth={true} to="contact" className="btn-main-offer">Contact Me</Link>
        </div>
    </div>
  )
}

export default Header