//  React from 'react'
// // import logo from './images/Logo.png';
// import logo from '../images/Logo.png'


// function Navbar() {
//   const navbarStyle = {
//     backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the opacity as needed
//     color: 'dark',
//   }
  
//   return (
//     <>import
//     <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" style={navbarStyle}>
//             <div className="container-fluid" >
//                 <a href="" className="navbar-brand">
//                     {/* <img src="/images/Logo.png" alt="ll"
//                     className="weblogo" /> */}
//                      <img src={logo} alt="ll"
//                     className="weblogo" />
                    
    
//                 </a>
    
//                 {/* <!-- mobile menu --> */}
//                 <button className="navbar-toggler" data-bs-target="#pn"
//                 data-bs-toggle="collapse">
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
    
//                 {/* <!--menu div start--> */}
//                 <div className="navbar-collapse collapse" id="pn" >
//                     <ul className="navbar-nav text-center ms-auto ">



//                         <li><a href="" className="nav-link">Projects</a></li>
//                         <li><a href="" className="nav-link">About</a></li>
//                         <li><a href="" className="nav-link">News</a></li>
//                         <li><a href="" className="nav-link">Services</a></li>
//                         <li><a href="" className="nav-link">Contact</a></li>
                        
    
//                     </ul>
    
//                 </div> 
    
    
//             </div> 
//             {/* <!--container-fluid end--> */}
    
//         </nav>  
//         {/* <!--navbar end--> */}

       

       
    
    
    
//     </>
      
        
    
     
//   )
// }

// export default Navbar

import React from 'react';
import logo from '../images/Logo.png';

function Navbar() {
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    color: 'white',
    border: 'none', // Remove any borders
  };

  const navLinkStyle = {
    color: 'white', // Ensure the text remains visible
  };

  const logoStyle = {
    opacity: 0.7, // Adjust the opacity of the logo if needed
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
          <div className="navbar-collapse collapse" id="pn" >
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
