import React from "react";
import logo from "../../assets/FinEase-logo.png";
import { Link, NavLink } from "react-router";
import { FadeLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const { user, loading, logOutUser } = useAuth();

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

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" shadow-sm">
      <div className="container shadow-sm">
        <div className="responsive-container navbar ">
          <div className="navbar-start flex justify-start items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                <HiMenu className="cursor-pointer" size={40} />
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
            {loading ? (
              <FadeLoader height={12} radius={5} margin={-3} color="#05545c" />
            ) : user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full cursor-pointer"
                      src={user.photoURL}
                      alt="Profile Photo"
                      title={user.displayName}
                    />
                  </div>
                  <div
                    tabIndex="-1"
                    className="dropdown-content menu text-center bg-base-100 rounded-box z-1 w-64 space-y-2 p-2 shadow-sm"
                  >
                    <h1 className="text-2xl font-semibold">
                      {user.displayName}
                    </h1>
                    <p className="text-lg">{user.email}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm sm:btn-md bg-sky-900 border-none text-white font-base sm:font-semibold text-lg sm:text-xl ml-2"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
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
