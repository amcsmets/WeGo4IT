import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isFixed] = useState(false);
  return (
    <nav className={`menu ${isFixed ? "fixed" : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/">About</Link>
          <ul className="submenu">
            <li>
              <Link to="/">Our story</Link>
            </li>
            <li>
              <Link to="/about/management">Management</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/services">Services</Link>
          <div className="submenu">
            <div className="menu-columns">
              <ul className="submenu1">
                <li>
                  <Link to="/services/team-extension" className="text-arrow">
                    Application Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/team-extension">Team Extension</Link>
                </li>
                <li>
                  <Link to="/services/outsource">Outsourcing</Link>
                </li>
              </ul>
              <ul className="submenu2">
                <li>
                  <Link to="/services/consultancy" className="text-arrow">
                    Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/">ERP Selection</Link>
                </li>
                <li>
                  <Link to="/services/agile-organization">
                    Agile Organization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link to="/customers">Our customers</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
