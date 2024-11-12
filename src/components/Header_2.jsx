/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header_2.css";
import Logo from "../img/Logo.png";
import Mercury from "../img/Mercury-min.png";
import Venus from "../img/Venus-min.png";
import Earth from "../img/Earth-min.png";
import Mars from "../img/Mars-min.png";
import Jupiter from "../img/Jupiter-min.png";
import Saturn from "../img/Saturn-min.png";
import Uranus from "../img/Uranus-min.png";
import Neptune from "../img/Neptune-min.png";

function Header_2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn">
            Planets
            <span className={`arrow ${dropdownOpen ? "open" : ""}`}>›</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/mercury" className="dropdown-item">
                Mercury
                <img className="planet-img" src={Mercury} alt="Mercury" />
              </Link>
              <Link to="/venus" className="dropdown-item">
                Venus
                <img className="planet-img" src={Venus} alt="Venus" />
              </Link>
              <Link to="/earth" className="dropdown-item">
                Earth
                <img className="planet-img" src={Earth} alt="Earth" />
              </Link>
              <Link to="/mars" className="dropdown-item">
                Mars
                <img className="planet-img" src={Mars} alt="Mars" />
              </Link>
              <Link to="/jupiter" className="dropdown-item">
                Jupiter
                <img className="planet-img" src={Jupiter} alt="Jupiter" />
              </Link>
              <Link to="/saturn" className="dropdown-item">
                Saturn
                <img className="planet-img" src={Saturn} alt="Saturn" />
              </Link>
              <Link to="/uranus" className="dropdown-item">
                Uranus
                <img className="planet-img" src={Uranus} alt="Uranus" />
              </Link>
              <Link to="/neptune" className="dropdown-item">
                Neptune
                <img className="planet-img" src={Neptune} alt="Neptune" />
              </Link>
            </div>
          )}
        </div>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header_2;
