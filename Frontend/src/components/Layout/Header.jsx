import React from "react";
import "../../styles/ComponentsStyles/LayoutStyles/headerStyle.css";
import { NavLink } from "react-router-dom";
import { Home } from "../../pages/home";
import About from "../../pages/about";

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
