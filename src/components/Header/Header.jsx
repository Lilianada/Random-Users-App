import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header className="header">
        <h3>Users App</h3>
      <nav className="navigation">
        <Link to='/' className="navLink">Home</Link>
        <Link to='/users' className="navLink">Users</Link>
        <Link to='/help' className="navLink">Help</Link>
      </nav>
    </header>
  );
}

