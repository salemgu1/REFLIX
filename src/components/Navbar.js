import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './NavBar.css';

function Navbar({budget}) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-itema">
          <Link to="/catalog" className="nav-link">
            Catalog
          </Link>
        </li>
        <li className="nav-itema">
          <div>
            Budget : {budget}
          </div>
        </li>

        <li className="nav-itema">

        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
