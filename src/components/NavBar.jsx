import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="MainConatinerOfNav">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/recipe">Recipe</NavLink>
          <NavLink to="/createrecipe">Create Recipe</NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
