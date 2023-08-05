import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link to={"/persons"}>Persons</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/context">Context</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
