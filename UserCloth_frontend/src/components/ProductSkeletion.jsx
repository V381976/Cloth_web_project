import Skeleton from "react-loading-skeleton";


import React from "react";

function ProductSkeletion() {
 return(
   <div className="bg-white rounded-xl shadow-md overflow-hidden w-full animate-pulse relative">

      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-gray-300 h-4 w-12 rounded"></div>

      {/* Wishlist */}
      <div className="absolute top-3 right-3 bg-gray-300 h-8 w-8 rounded-full"></div>

      {/* Image */}
      <div className="bg-gray-300 w-full h-42 sm:h-46 md:h-50 lg:h-54"></div>

      {/* Content */}
      <div className="p-2 space-y-2">

        {/* Brand */}
        <div className="bg-gray-300 h-3 w-20 rounded"></div>

        {/* Title */}
        <div className="bg-gray-300 h-4 w-full rounded"></div>
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>

        {/* Price */}
        <div className="flex gap-2 mt-2">
          <div className="bg-gray-300 h-4 w-16 rounded"></div>
          <div className="bg-gray-300 h-4 w-12 rounded"></div>
        </div>b  

        {/* Stock */}
        <div className="bg-gray-300 h-3 w-16 rounded"></div>

        {/* Button */}
        <div className="bg-gray-300 h-9 w-full rounded-lg"></div>

      </div>

    </div>
 )
}

export default ProductSkeletion;

