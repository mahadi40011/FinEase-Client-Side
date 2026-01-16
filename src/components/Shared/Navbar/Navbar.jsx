import logo from "../../../assets/FinEase-logo.png";
import { Link, NavLink } from "react-router";
import { FadeLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import { HiMenu } from "react-icons/hi";
import ThemeToggleButton from "../../Buttons/ThemeToggleButton";

const Navbar = () => {
  const { user, loading, logOutUser } = useAuth();

  const navItem = (
    <>
      <li className="font-semibold font-inter text-lg xl:text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold font-inter text-lg xl:text-xl">
        <NavLink to="/calculators">Calculators</NavLink>
      </li>
      <li className="font-semibold font-inter text-lg xl:text-xl">
        <NavLink to="/resources">Resources</NavLink>
      </li>
      <li className="font-semibold font-inter text-lg xl:text-xl">
        <NavLink to="/about-us">About-Us</NavLink>
      </li>
      {user && (
        <li className="font-semibold font-inter text-lg xl:text-xl">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
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
    <div className="fixed top-0 z-50 w-full bg-app-200 font-poppins text-natural shadow-md">
      <div className="container ">
        <div className="responsive-container navbar ">
          <div className="navbar-start flex justify-start items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                <HiMenu className="cursor-pointer" size={40} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-[#161925] text-white dark:bg-white dark:text-gray-800 rounded-b-2xl z-1 mt-4 w-32 p-2"
              >
                {navItem}
              </ul>
            </div>
            <div className="flex items-center gap-0.5">
              <img className="w-10 sm:w-14 " src={logo} alt="" />
              <h1 className="text-4xl font-bold bg-linear-to-r from-sky-900 to-blue-600 bg-clip-text text-transparent italic hidden sm:block">
                FinEase
              </h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-4">{navItem}</ul>
          </div>
          <div className="navbar-end space-x-3">
            <ThemeToggleButton />
            {loading ? (
              <FadeLoader height={15} margin={3} color="#05545c" />
            ) : user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full cursor-pointer"
                      src={user?.photoURL}
                      alt="Profile Photo"
                      title={user?.displayName}
                    />
                  </div>
                  <div
                    tabIndex="-1"
                    className="dropdown-content menu bg-app-200 text-start rounded-box z-1 w-64 space-y-2 p-4 shadow-sm"
                  >
                    <div className="mb-4 ">
                      <h1 className="text-lg font-semibold">
                        {user?.displayName}
                      </h1>
                      <p className="text-base">{user?.email}</p>
                    </div>

                    <Link
                      to={"/profile"}
                      className="btn btn-sm sm:btn-md bg-sky-700 hover:bg-sky-900 transition duration-200 border-none text-white font-base sm:font-semibold text-lg sm:text-xl"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm sm:btn-md bg-sky-700 hover:bg-sky-900 transition duration-200 border-none text-white font-base sm:font-semibold text-lg sm:text-xl"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to={"/auth/login"}
                className="btn btn-sm sm:btn-md bg-sky-700 hover:bg-sky-900 transition duration-200 border-none text-white font-base sm:font-semibold text-lg sm:text-xl ml-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
