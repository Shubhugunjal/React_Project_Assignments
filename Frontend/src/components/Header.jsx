import React from "react";
import "../styles/ComponentsStyles/headerStyle.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="active">
          Home
        </NavLink>

        <NavLink to="/about">About</NavLink>
      </header>
    </>
  );
};
