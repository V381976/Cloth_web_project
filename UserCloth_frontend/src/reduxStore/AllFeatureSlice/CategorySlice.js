 import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"; 
  import axios from "axios";

  export const FetchCategory =createAsyncThunk(
    "allCategory/FetchCategory" ,
    async(gender) => {
        try{
 const response = await axios.get("http://localhost:5000/api/category/cloth" ,
  {
    params:{
      gender
    }
  }
 );

    return response.data;

  } catch{

  }

    });

    const categorySlice = createSlice({
  name: "categories",

  initialState: {
    items: [],
    status: "idle"
  },

  extraReducers: (builder) => {

    builder

      .addCase(FetchCategory.pending, (state) => {
        state.status = "loading";
      })

      .addCase(FetchCategory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })

      .addCase(FetchCategory.rejected, (state) => {
        state.status = "error";
      });

  }
});

export default categorySlice.reducer;

