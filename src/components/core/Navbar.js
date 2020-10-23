import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className=" nav-bar-container">
          <h1>La</h1>
          <div>
            <ul className="nav-menu">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/resume">Resume</Link>
              </li>
              {/* <li className="nav-link">
                <Link to="/projects">Projects</Link>
              </li> */}
              <li className="nav-link">
                <Link to="/contact-me">Contact me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
