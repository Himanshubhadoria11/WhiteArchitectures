
import React from 'react';
import logo from '../images/Logo.png';
import '../style/navbar.css'

function Navbar() {
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    color: 'white',
    border: 'none', 
    
  };

  const navLinkStyle = {
    color: 'white', 
    
  };

  const logoStyle = {
    opacity: 0.7, 
  };

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top" style={navbarStyle}>
        <div className="container-fluid">
          <a href="" className="navbar-brand">
            <img src={logo} alt="ll" className="weblogo" style={logoStyle} />
          </a>

          {/* <!-- mobile menu --> */}
          <button
            className="navbar-toggler"
            data-bs-target="#pn"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!--menu div start--> */}
          <div className="navbar-collapse collapse " id="pn" >
            <ul className="navbar-nav text-center ms-auto">
              <li>
                <a href="" className="nav-link" style={navLinkStyle}>
                  Projects
                </a>
              </li>
              <li>
                <a href="" className="nav-link" style={navLinkStyle}>
                  About
                </a>
              </li>
              <li>
                <a href="" className="nav-link" style={navLinkStyle}>
                  News
                </a>
              </li>
              <li>
                <a href="" className="nav-link" style={navLinkStyle}>
                  Services
                </a>
              </li>
              <li>
                <a href="" className="nav-link" style={navLinkStyle}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
