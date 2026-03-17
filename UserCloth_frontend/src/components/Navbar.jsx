import React, { useState } from "react";
import logo from "../assets/Cloth_Logo.png";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../reduxStore/AllFeatureSlice/AuthSlice";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {

    await dispatch(LogoutUser());
    navigate("/login");

  };

  return (

    <nav className="bg-black text-white w-full sticky z-50  top-0 left-0  shadow ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/" className="text-2xl font-bold tracking-wide">

          <img
            src={logo}
            alt="ClothStore Logo"
            className="h-12 w-auto transition-transform duration-300 hover:scale-110"
          />

        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 font-medium">

          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* Right Side */}

        <div className="flex items-center gap-6">

          {/* Cart */}

          <Link to="/cart" className="relative">

            <FaShoppingCart className="text-xl cursor-pointer" />

            {cartItems?.length > 0 && (

              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">

                {cartItems.length}

              </span>

            )}

          </Link>


          {/* Profile */}

          <div className="relative">

            {/* Avatar */}

            <div
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold cursor-pointer"
            >

              {user ? user.name.charAt(0).toUpperCase() : "U"}

            </div>


            {/* Dropdown */}

            {profileOpen && (

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-3 w-40 bg-white text-black rounded-lg shadow-lg p-2"
              >

                {!user && (

                  <Link
                    to="/login"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Login
                  </Link>

                )}

                {user && (

                  <>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Logout
                    </button>
                  </>

                )}

              </motion.div>

            )}

          </div>


          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black"
        >

          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </motion.div>

      )}

    </nav>

  );
}

export default Navbar;