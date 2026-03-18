import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddToCartItem  ,getCartitem} from "../reduxStore/AllFeatureSlice/CartSlice";
import {addToWishlist} from "../reduxStore/AllFeatureSlice/WishlistSlice" ;
function ProductCard({ product }) {
    
      const dispatch = useDispatch() ;
     const handleAddTocart = async () => {

  const res = await dispatch(AddToCartItem(product._id));

  if (res.meta.requestStatus === "fulfilled") {
    dispatch(getCartitem());
  }
     }
     const handleWishlist = () =>{
      dispatch(addToWishlist(product._id));
      }

  return (
    <motion.div
      whileHover={{ y: -6 ,scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl  group relative"
    >


      <div className="overflow-hidden w-full">
   
        <img
          src={product.image?.[0]}
          alt={product.title}
          className="rounded-3xl w-full h-42 sm:h-46 md:h-45 lg:h-75 object-scale-down transform duration-500 ease-in-out transition "
        />
     <span className="absolute top-5 left-4 font-semibold rounded-xl bg-red-500 text-white text-[10px] p-1  z-10">
          {product.discountPercentage}% OFF
        </span>

          <button  onClick={handleWishlist}
           className="absolute top-5 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 z-10">
        <FaHeart />
      </button>
      </div>

      {/* Content */}

      <div className="p-2">

        {/* Brand */}

        <p className="text-xs text-gray-500 uppercase">
          {product.brand}
        </p>

        {/* Title */}

        <h2 className="font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>


        {/* Price */}

        <div className="flex items-center gap-2 mt-2">

          <span className="text-lg font-bold text-red-500">
            ₹{product.selling_price}
          </span>

          {product.price && (
            <span className="text-sm line-through text-gray-400">
              ₹{product.price}
            </span>
          )}

        </div>

        {/* Stock */}
       
        {product.stock > 0 ? (
          <p className="text-green-600 text-xs mt-1">In Stock</p>
        ) : (
          <p className="text-red-500 text-xs mt-1">Out of Stock</p>
        )}

        {/* Button */}

        <button
          onClick={ handleAddTocart}
         className="mt-2 w-full bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-2  hover:shadow-md hover:scale-[1.02] transition">
          <FaShoppingCart />  
          Add to Cart
        </button>

      </div>

    </motion.div>
  );
}

export default ProductCard;