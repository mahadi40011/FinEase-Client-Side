import React, { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { googleLogin, LoginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //email validation
  const handleEmailFieldOnBlur = (e) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value === "") return setEmailError("");
    if (!emailValidation.test(email)) {
      setEmailError("Email invalid");
      return;
    } else return setEmailError("");
  };

  // Password validation
  const handlePasswordValidation = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (pass === "") return setPasswordError("");
    if (!passwordValidation.test(pass)) {
      setPasswordError(
        "Must include an Uppercase, a Lowercase and password at least 6 characters or longer"
      );
      return;
    } else return setPasswordError("");
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    LoginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location.state || "/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[89vh]">
      <title>FinEase - Login</title>
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="sm:text-3xl text-2xl font-bold text-center mb-8">
          Please Login
        </h2>

        {/* google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 px-4 py-2 mb-4 rounded-lg border border-gray-300  transition w-full cursor-pointer text-center"
        >
          <FcGoogle className="text-xl" /> <span> Login with Google</span>
        </button>

        <div className="text-center  text-md mb-4">
          — or login with email —
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label className="block text-sm font-medium  mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={email}
            onBlur={handleEmailFieldOnBlur}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
          <span className="text-red-500">{emailError}</span>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium  mt-5 mb-1">
              Password
            </label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              onChange={handlePasswordValidation}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <MdRemoveRedEye />}
            </span>
            <span className="text-red-500">{passwordError}</span>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between text-sm mt-2 mb-5 ">
            <Link
              to="/forgot-password"
              className="text-sky-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-sky-900 hover:bg-sky-700 transition duration-200 cursor-pointer text-white font-medium"
          >
            Log In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center  mt-6 text-md">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-sky-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
