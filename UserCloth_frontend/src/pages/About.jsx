import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Cloth_Logo.png";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}

      <div className="bg-black text-white py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          About ClothStore
        </motion.h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Premium clothing brand for modern fashion lovers.  
          We believe fashion should be comfortable, stylish and affordable.
        </p>

      </div>

      {/* Story Section */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={logo}
          alt="Clothing Store"
          className="rounded-xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            ClothStore started with a simple idea — bring stylish clothing
            that everyone can afford. Our journey began with a small team
            passionate about fashion and quality fabrics.
          </p>

          <p className="mt-4 text-gray-600">
            Today we serve thousands of customers across India with
            trendy collections for men, women and kids.
          </p>

        </motion.div>

      </div>

      {/* Mission & Vision */}

      <div className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              Our mission is to make high-quality fashion accessible
              to everyone. We focus on modern trends, comfort and
              sustainable materials.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              We aim to become one of the leading online clothing
              brands by delivering premium fashion with exceptional
              customer experience.
            </p>

          </motion.div>

        </div>

      </div>

      {/* Stats Section */}

      <div className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-600">Products</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="text-gray-600">Brands</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="text-gray-600">Support</p>
          </div>

        </div>

      </div>

      {/* Why Choose Us */}

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ClothStore
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              We use high quality fabrics that provide comfort and durability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              Affordable Fashion
            </h3>
            <p className="text-gray-600">
              Trendy clothing at prices everyone can afford.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable delivery across India.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;