import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
    <div className="navbar">
      <Link to="/">
        <button className="navButton" >Dashboard</button>
      </Link>
      <Link to="/appointments">
        <button className="navButton">Appointments</button>
      </Link>
      <Link to="/under-development">
        <button className="navButton">Doctors</button>
        <button className="navButton">Departments</button>
        <button className="navButton">Patients</button>
        <button className="navButton">Payments</button>
        <button className="navSep">|</button>
        <button className="navButton">Service Pages</button>
        <button className="navButton">Help</button>
        </Link>
    </div>
    )
}

export default Navbar