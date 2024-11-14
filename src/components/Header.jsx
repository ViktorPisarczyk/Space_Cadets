/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../img/Logo.png";
import Mercury from "../assets/Mercury.png";
import Venus from "../assets/Venus.png";
import Earth from "../assets/Earth.png";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturn from "../assets/Saturn.png";
import Uranus from "../assets/Uranus.png";
import Neptune from "../assets/Neptune.png";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.current.target)
      ) {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/planets" className="nav-link">
          Explore
        </Link>
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="dropdown-btn">
            Planets
            <span className={`arrow ${dropdownOpen ? "open" : ""}`}>›</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/planets/mercury" className="dropdown-item">
                Mercury
                <img className="planet-img" src={Mercury} alt="Mercury" />
              </Link>
              <Link to="planets/venus" className="dropdown-item">
                Venus
                <img className="planet-img" src={Venus} alt="Venus" />
              </Link>
              <Link to="planets/earth" className="dropdown-item">
                Earth
                <img className="planet-img" src={Earth} alt="Earth" />
              </Link>
              <Link to="planets/mars" className="dropdown-item">
                Mars
                <img className="planet-img" src={Mars} alt="Mars" />
              </Link>
              <Link to="planets/jupiter" className="dropdown-item">
                Jupiter
                <img className="planet-img" src={Jupiter} alt="Jupiter" />
              </Link>
              <Link to="planets/saturn" className="dropdown-item">
                Saturn
                <img className="planet-img" src={Saturn} alt="Saturn" />
              </Link>
              <Link to="planets/uranus" className="dropdown-item">
                Uranus
                <img className="planet-img" src={Uranus} alt="Uranus" />
              </Link>
              <Link to="planets/neptune" className="dropdown-item">
                Neptune
                <img className="planet-img" src={Neptune} alt="Neptune" />
              </Link>
            </div>
          )}
        </div>
        <Link to="/team" className="nav-link">
          Team
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
