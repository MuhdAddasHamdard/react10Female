import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      path: "/",
      value: "About",
    },
    {
      path: "/counter",
      value: "Counter",
    },
    {
      path: "/form",
      value: "Form",
    },
  ];
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-2.5">
          {links.map((link) => {
            return (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-300 text-white rounded p-1 underline"
                      : "hover:bg-blue-300"
                  }
                  to={link.path}
                >
                  {link.value}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
