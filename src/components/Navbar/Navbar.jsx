import React, { useContext } from "react";
import logo from "../../assets/FinEase-logo.png";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const user = useContext(AuthContext);
  console.log(user);

  const navItem = (
    <>
      <li className="font-semibold text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink to="/add-transaction">Add Transaction</NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink to="/my-transaction">My Transactions</NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink to="/reports">Reports</NavLink>
      </li>
    </>
  );

  return (
    <div className=" shadow-sm">
      <div className="container shadow-sm">
        <div className="responsive-container navbar ">
          <div className="navbar-start flex justify-start items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                <TiThMenu className="cursor-pointer" size={30} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-white rounded-b-2xl z-1 mt-6 w-32 p-2"
              >
                {navItem}
              </ul>
            </div>
            <div className="flex items-center gap-0.5">
              <img className="w-10 sm:w-14 " src={logo} alt="" />
              <span className="text-4xl text-sky-900 font-semibold hidden sm:block">
                FinEase
              </span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-4">{navItem}</ul>
          </div>
          <div className="navbar-end">
            {/* {user && (
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={user.photoURL}
              alt="Profile Photo"
              title={user.displayName}
            />
          )} */}
            {/* {loading ? (
            <FadeLoader className="mr-15" color="#ffffff" />
          ) :  */}
            {user ? (
              <button
                type="button"
                // onClick={handleLogOut}
                className="btn bg-sky-900 border-none text-white text-xl ml-2"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to={"/auth/login"}
                  className="btn btn-sm sm:btn-md bg-sky-900 border-none text-white font-base sm:font-semibold text-lg sm:text-xl ml-2"
                >
                  Login
                </Link>
                <Link
                  to={"/auth/register"}
                  className="btn btn-sm sm:btn-md bg-sky-900 border-none text-white font-base sm:font-semibold text-lg sm:text-xl ml-2"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
