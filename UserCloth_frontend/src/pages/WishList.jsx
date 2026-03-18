import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../reduxStore/AllFeatureSlice/WishlistSlice";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingCart, } from "lucide-react";
 import {moveToCart , wishRemove} from "../reduxStore/AllFeatureSlice/WishlistSlice" ;

export default function Wishlist() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);




   
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const removeItem = (id) => {
    dispatch(wishRemove(id))
  } ;

       
    

  return ( 
   <div className="px-8 py-12 bg-gray-100 min-h-screen">

  <h1 className="text-4xl font-bold mb-10 text-gray-800">
    ❤️ My Wishlist
  </h1>

  {items?.length === 0 && (
  <div className="flex flex-col items-center mt-20 text-gray-500">
    <p className="text-xl">Your wishlist is empty</p>
    <p className="text-sm mt-2">Start adding products you love ❤️</p>
  </div>
)}

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">

    {items?.map((item) => (
      <motion.div
        key={item._id}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group"
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden">

          <img
            src={item?.product?.image}
            alt={item?.product?.title}
            className="w-full h-70 object-fill group-hover:scale-110 transition duration-300"
          />

          {/* DELETE BUTTON */}
          <button  onClick={() => removeItem(item._id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100 transition">
            <Trash2 size={18} className="text-red-500" />
          </button>

        </div>

        {/* CONTENT */}
        <div className="p-2">

          <h2 className="font-semibold text-sm line-clamp-2 text-gray-800">
            {item?.product?.title}
          </h2>

          <p className="text-gray-500 text-xs mt-1">
            {item?.product?.category?.name}
          </p>

          {/* PRICE */}
     <div className="flex items-center gap-2 mt-2">
  <span className="text-lg font-bold text-green-600">
    ₹{item?.product?.price}
  </span>

  <span className="text-sm text-gray-400 line-through">
    ₹{item?.product?.price + 500}
  </span>
</div>

          {/* MOVE TO CART */}
          <button   onClick={() => dispatch(moveToCart(item._id))}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium">
           Move to cart
          </button>

        </div>

      </motion.div>
    ))}

  </div>
</div>
  );
}
