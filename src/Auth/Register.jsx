import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { googleLogin, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  //email validation
  const handleEmailFieldOnBlur = (e) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value === "") return setEmailError("");
    if (!emailValidation.test(e.target.value)) {
      setEmailError("Email invalid");
      return;
    } else return setEmailError("");
  };

  // Password validation
  const handlePasswordValidation = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (pass === "") return setPasswordError(null);
    if (!passwordValidation.test(pass)) {
      setPasswordError(
        "Must include an Uppercase, a Lowercase and password at least 6 characters or longer"
      );
      return;
    } else return setPasswordError(null);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
        });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || passwordError) return;

    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    try {
      await createUser(email, password);
      await updateUserProfile(displayName, photoURL);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Registration Unsuccessful",
        text: err.message,
      });
    }
  };

  return (
    <div className=" text-natural font-poppins ">
      <title>FinEase - Register</title>
      <div className="bg-app-200 p-8 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center  mb-6">
          Create Your Account
        </h2>

        {/* google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 px-4 py-3 mb-6 rounded-lg bg-app-100 w-full cursor-pointer text-center text-lg"
        >
          <FcGoogle size={28} className="text-xl" />{" "}
          <span> Login with Google</span>
        </button>

        <div className="text-center  text-md mb-4">
          — or SignUp with Email —
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block text-lg font-medium  mt-5 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700"
          />

          {/* Email */}
          <label className="block text-lg font-medium  mt-5 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailFieldOnBlur}
            required
            className="w-full px-4 py-3 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700"
          />
          <span className="text-red-500">{emailError}</span>

          {/* Photo URL */}
          <label className="block text-lg font-medium  mt-5 mb-1">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-3 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700"
          />

          {/* Password */}
          <div className="relative">
            <label className="block text-lg font-medium  mt-5 mb-1">
              Password
            </label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              onChange={handlePasswordValidation}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-12 text-xl right-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <MdRemoveRedEye />}
            </span>
            <span className="text-red-500">{passwordError}</span>
          </div>

          <button
            type="submit"
            className={`w-full py-3 mt-7 text-lg rounded-lg bg-sky-700 hover:bg-sky-900 transition duration-200 text-white font-medium ${
              emailError || passwordError
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Register
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center  mt-6 text-md">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-sky-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
