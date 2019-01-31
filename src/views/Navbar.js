import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand text-success" >Deal Safi</Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="">
              <input type="search" className="form-control mr-sm-2" placeholder="Search" />
            </Link>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
