import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex">
      <nav className="flex justify-between w-full p-2 bg-black text-white">
        <ul className="flex gap-2 px-4 py-2 text-lg flex-wrap">
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={""}
          >
            <li>General</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"technology"}
          >
            <li>Technology</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"sports"}
          >
            <li>Sports</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"entertainment"}
          >
            <li>Entertainment</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"business"}
          >
            <li>Business</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"health"}
          >
            <li>Health</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `list-none ${isActive ? "text-green-500" : ""}`
            }
            to={"science"}
          >
            <li>Science</li>
          </NavLink>
        </ul>

        <div className="flex gap-2">
          <NavLink
            to={"/login"}
            className="px-6 py-2 bg-blue-500 text-black rounded-lg"
          >
            Login
          </NavLink>
          <NavLink
            to={"/signup"}
            className="px-6 py-2 bg-blue-500 text-black rounded-lg"
          >
            Signup
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
