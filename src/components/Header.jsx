import React from "react";
import HeaderLogo from "../images/jurassic-world.jpg";

export const Header = () => {
  return (
    <header className="header">
      <h1>D-REF</h1>
      <img className="header-logo" src={HeaderLogo} alt="logo" />
    </header>
  );
};
