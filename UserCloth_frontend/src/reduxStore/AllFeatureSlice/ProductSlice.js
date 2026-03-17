  import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"; 
  import axios from "axios";


export const fetchwomenCloth = createAsyncThunk(
    "allProducts/fetchwomenCloth",
    async(filter = {} ) =>  {
        try{

            const {page = 1,category, search, priceRange, sort } = filter ;
            const response = await axios.get("http://localhost:5000/api/womenCloth" ,{
             params: {
           page,
          limit: 10,
          search,
          category,
          priceRange,
          sort
        }
        });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    );

    export const fetchmenCloth = createAsyncThunk(
    "allProducts/fetchmenCloth",
    async(filter = {}) =>  {
        try {

      const {page = 1, category, search, priceRange, sort } = filter;

      const response = await axios.get("http://localhost:5000/api/menCloth", {
        params: {
           page,
          limit: 10,
          search,
         category,
          priceRange,
          sort
        }
      });
        return response.data;
        } catch (error) {
            throw error;
        }
    }
    );

        const productSlice = createSlice({
            name : "allproducts" ,
            initialState: { 
                items : [],
                status : "idle" ,
                 page: 1,
                totalPages: 1
            },

            // reducers: {} ,
           extraReducers : (builder) =>{
                builder  
                //  Women Api call
              .addCase(fetchmenCloth.pending, (state) => {
               state.status = "loading";
             })
             
             .addCase(fetchmenCloth.fulfilled, (state, action) => {
               if(action.meta.arg.page === 1){
                 state.items = action.payload.products;
               }else{
                 state.items = [...state.items, ...action.payload.products];
               }
               state.totalPages = action.payload.totalPages;
               state.status = "success";
             })
             
             .addCase(fetchmenCloth.rejected, (state) => {
               state.status = "error";
             })
              .addCase(fetchwomenCloth.pending, (state) => {
               state.status = "loading";
             })
             
             .addCase(fetchwomenCloth.fulfilled, (state, action) => {
                if(action.meta.arg.page === 1){
                 state.items = action.payload.products;
               }else{
                 state.items = [...state.items, ...action.payload.products];
               }
               state.totalPages = action.payload.totalPages;
               state.status = "success";
             })
             
             .addCase(fetchwomenCloth.rejected, (state) => {
               state.status = "error";
             });
            }

            })
 
export default productSlice.reducer ;
