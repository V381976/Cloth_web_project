import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* Logo Section */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
        >
          <h1 className="text-2xl font-bold text-white">ClothStore</h1>

          <p className="mt-4 text-sm text-gray-400">
            Discover the latest fashion trends with premium quality clothing.
            Style meets comfort at ClothStore.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.2 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.3 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            Categories
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Kids</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.4 }}
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h2>

          <div className="flex gap-5 text-2xl">

            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook/>
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram/>
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter/>
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              <FaGithub/>
            </a>

          </div>
        </motion.div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 ClothStore. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;