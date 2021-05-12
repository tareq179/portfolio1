import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
            <h1>AbdulKarim</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="">Skills</Link>
              </li>
              <li>
                <Link to="">Portfolio</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
}

export default Navbar;
