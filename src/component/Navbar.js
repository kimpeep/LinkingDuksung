import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import "../css/navbar.css";
import Footer from './Footer.js';
import logo from "../img/textlogo.png";


const Navbar = () => {
    return(
    <>
      <div className="navbar">
        <div className="left">
          <NavLink to="/">
            <img
              className="nav-logo"
              alt="홈 아이콘"
              src={logo}
              height="60px"
            />
          </NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/dataunlock" className="nav-link">
                Data UnLock
              </NavLink>
            </li>
            <li>
              <NavLink to="/collaboration" className="nav-link">
                Collaboration
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </>
    )
}

export default Navbar;