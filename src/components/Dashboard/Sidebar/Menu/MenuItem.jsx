/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 my-2 transition-all duration-300 transform rounded-md group font-poppins ${
          isActive
            ? "bg-sky-100/75 text-sky-700 "
            : "text-gray-500 hover:bg-sky-50 hover:text-sky-900"
        }`
      }
    >
      <Icon
        className={`w-5 h-5 transition-colors duration-300 ${"group-hover:scale-110"}`}
      />

      <span className="mx-4 font-bold text-sm tracking-wide">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
