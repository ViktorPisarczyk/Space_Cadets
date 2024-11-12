/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../img/Logo.png";
import Mercury from "../img/Mercury.png";
import Venus from "../img/Venus.png";
import Earth from "../img/Earth.png";
import Jupiter from "../img/Jupiter.png";
import Mars from "../img/Mars.png";
import Neptune from "../img/Neptune.png";
import Uranus from "../img/Uranus.png";
import Saturn from "../img/Saturn.png";

function Header() {
  return (
    <div>
      <nav className="header">
        <Link to="/home">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <div className="header-links">
          <li>
            <Link to="/mercury">
              <img className="planet-links" src={Mercury} alt="Mercury" />
            </Link>
          </li>
          <li>
            <Link to="/venus">
              <img className="planet-links" src={Venus} alt="Venus" />
            </Link>
          </li>
          <li>
            <Link to="/earth">
              <img className="planet-links" src={Earth} alt="Earth" />
            </Link>
          </li>
          <li>
            <Link to="/mars">
              <img className="planet-links" src={Mars} alt="Mars" />
            </Link>
          </li>
          <li>
            <Link to="/jupiter">
              <img className="planet-links" src={Jupiter} alt="Jupiter" />
            </Link>
          </li>
          <li>
            <Link to="/saturn">
              <img className="planet-links" src={Saturn} alt="Saturn" />
            </Link>
          </li>
          <li>
            <Link to="/uranus">
              <img className="planet-links" src={Uranus} alt="Uranus" />
            </Link>
          </li>
          <li>
            <Link to="/neptune">
              <img className="planet-links" src={Neptune} alt="Neptune" />
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
