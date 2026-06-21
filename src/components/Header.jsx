import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-2.5">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/form">get in touch </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
