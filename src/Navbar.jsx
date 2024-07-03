// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="#intro" className="btn btn-ghost normal-case text-xl">
          Shamim
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {/* <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li> */}
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
