import React from 'react';
import "./navbar.css";

const Navbar = (props) => {
	return (
		<div className="navbar">
      <a className="active" href="#dashboard">Dashboard</a>
      <a href="#appointments">Appointments</a>
      <a href="#doctors">Doctors</a>
      <a href="#departments">Departments</a>
      <a href="#patients">Patients</a>
      <a href="#payments">Payments</a>
      <a className="paymentDivider"></a>
      <a className="afterSep" href="#service-pages">Service Pages</a>
      <a href="#help">Help</a>
    </div>
    )
}

export default Navbar