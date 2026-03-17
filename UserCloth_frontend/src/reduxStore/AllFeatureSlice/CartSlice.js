import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

const initialState= {
    cartItems :[],
    loading :false ,
    error :null 
};

// Add api cart 


export const AddToCartItem = createAsyncThunk(
    "cart/AddToCartItem" ,
    async(productId , {rejectWithValue}) => {
      try {
         const {data} = await axios.post(
          "http://localhost:5000/api/cart/add" ,
          {productId} , 
          { withCredentials: true }
         );
         return data ;
      } catch (err) {
        return rejectWithValue(err.response?.data || err.message)
      }

    }) ;

 export const getCartitem =  createAsyncThunk(
    "cart/getCartitem" ,
    async( _, { rejectWithValue }) =>{
     try{
        const {data} = await axios.get(
           "http://localhost:5000/api/cart/list",
           { withCredentials: true }
        );
        return data ;
     }catch(err){
         return rejectWithValue(err.response?.data || err.message)
    }

    }
 ) ;

 /* REMOVE CART ITEM */

export const removeCartAsync = createAsyncThunk(
  "cart/removeCart",
  async (id, { rejectWithValue }) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/cart/${id}`,
        { withCredentials: true }
      );

      return id;

    } catch (err) {

     return rejectWithValue(err.response?.data || err.message)

    }

  }
);
// update cloth quantity

export const updateCartQty = createAsyncThunk(
 "cart/updateQty",
 async({id,quantity},{rejectWithValue})=>{

  try{

   const {data} = await axios.put(
    `http://localhost:5000/api/cart/update/${id}`,
    {quantity},
    {withCredentials:true}
   );

   return data;

  }catch(err){

   return rejectWithValue(err.response?.data || err.message);

  }

 }
);



    const cartSlice = createSlice({
       name :"cart" ,
       initialState ,
       
       reducers :{} ,
       extraReducers :(builder ) => {

        builder 
        /* loading */

        .addCase(AddToCartItem.pending , (state) =>{
            state.loading = true ;

        })

        // success
        .addCase(AddToCartItem.fulfilled ,(state ,action) =>{
            state.loading = false ;

            const item = action.payload ;

            const existitem = state.cartItems.find(
                (x) => x.product?._id === item.product?._id
            );
            if(existitem) {
                existitem.quantity = item.quantity ;
            }else{
                state.cartItems.push(item); 
            }
        })
          //   Error
     .addCase(AddToCartItem.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload;

      })

            // =====  /* GET CART */ ======

      .addCase(getCartitem.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCartitem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })

    //    ==========  /* REMOVE CART */ ========

      .addCase(removeCartAsync.fulfilled, (state, action) => {

        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );

      })
      .addCase(updateCartQty.fulfilled,(state,action)=>{

         const item = action.payload;        

         const index = state.cartItems.findIndex(
          (x)=>x._id === item._id
         );        

         if(index !== -1){
          state.cartItems[index] = item;
         }        

        });        


       }

    });

export default cartSlice.reducer ;