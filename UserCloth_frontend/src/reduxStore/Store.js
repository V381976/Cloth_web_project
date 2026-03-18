import { configureStore }  from "@reduxjs/toolkit";
import  ProductReducer from "../reduxStore/AllFeatureSlice/ProductSlice" ;
 import  AuthReducer from "../reduxStore/AllFeatureSlice/AuthSlice" ;
 import CartReducer from "../reduxStore/AllFeatureSlice/CartSlice" ;
 import CategoryReducer from "../reduxStore/AllFeatureSlice/CategorySlice" ;
 import wishlistReducer from "../reduxStore/AllFeatureSlice/WishlistSlice";

 export const store = configureStore({
    reducer :{
        products : ProductReducer ,
        auth :  AuthReducer ,
      cart :  CartReducer ,
      categories: CategoryReducer,
       wishlist: wishlistReducer
    }
}); 