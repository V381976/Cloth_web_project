import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId) => {

    const res = await axios.post("http://localhost:5000/api/wish/add", 
      {productId},
       { withCredentials: true }
    );

    return res.data;
  }
);

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {

    const res = await axios.get("http://localhost:5000/api/wish" ,
         { withCredentials: true }
    );

    return res.data;
  }
); 

export const wishRemove = createAsyncThunk(
  "wishlist/wishremove" ,
  async (id)=>{
    const res = await axios.delete(
       `http://localhost:5000/api/wish/${id}`
       ,{ withCredentials: true }
    );
    return id ;
  }
)

export const moveToCart = createAsyncThunk(
  "wishlist/Movetocart" ,
  async (wishlistId) => {
     await axios.post("http://localhost:5000/api/wish/move-to-cart", 
    {wishlistId} ,
     { withCredentials: true }
     );
      return wishlistId;
  }
  )

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
    status: "idle"
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })

      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
         state.status = "success";
      })
        .addCase(moveToCart.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload
        );
        state.status = "success";
      })
       .addCase(wishRemove.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload
        );
        state.status = "success";
      });

  }

});

export default wishlistSlice.reducer;