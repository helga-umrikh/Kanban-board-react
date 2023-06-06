import React from "react";
import User from "../User/User";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      Awesome Kanban Board
    </Link>
    <User />
  </header>
);

export default Header;