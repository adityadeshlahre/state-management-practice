import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Normal State Management</Link>
          </li>
          <li>
            <Link to="/recoil">Recoil State Management</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
