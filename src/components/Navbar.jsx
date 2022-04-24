import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";

const Navbar = () => {
  return (
    <div className="mt-10 space-x-6 p-5 max-w-screen-md mx-auto flex justify-center">
      {routes.map((route) => (
        <NavLink
          className={({ isActive }) =>
            `flex items-center rounded-lg p-2 px-20 bg-primary text-white font-bold ${
              isActive && "border-4 border-primary bg-white text-black"
            }`
          }
          to={`${route.path}`}
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
