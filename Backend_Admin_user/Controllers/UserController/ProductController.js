const Product = require("../../models/ProductModel");
const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler");
const Category = require("../../models/CategoryModel"); 

const   getmenProducts =  asyncHandler( async(req ,res) =>{
 try {   
     const{ search ,category,minPrice ,maxPrice ,priceRange ,sort} = req.query ;
     let query = { gender :"men"} ;
   
   //   Search 
   if(search){
      query.$text = {$search : search} ;
   }

  
   // Price Filter
   if(minPrice || maxPrice){
      query.price = {} ;
      if(minPrice){
         query.price.$gte = Number(minPrice);
      }
      if(maxPrice){
         query.price.$lte = Number(maxPrice)
      }
   }

   // category filter
if(category){
   query.category = category;
}

    // priceRange 
   if (priceRange) {

 const [min, max] = priceRange.split("-");

 query.selling_price = {
  $gte: Number(min),
  $lte: Number(max)
 };

}

   // Sorting

   let sortOption = {};

   if(sort === "low"){
      sortOption.price = 1 ;
   }

   if(sort === "high"){
      sortOption.price = -1 ;
   } 

   // pagination
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 20 ;

   const skip = (page -1) * limit ;

 const products = await Product.find(query).populate("category","name")
                         .sort(sortOption).skip(skip).limit(limit);

 const totalProducts = await Product.countDocuments(query)
  res.json({products , 
   totalPages: Math.ceil(totalProducts / limit),
    currentPage: page});

 } catch (error){
    console.log(error)
 throw new ApiError("Failed to fetch products", 500);

 }

});

const  getwomenProducts =  asyncHandler( async(req ,res) =>{
  try { 
     const{ search ,category,minPrice ,maxPrice ,sort, priceRange } = req.query ;
     let query = { gender :"women"} ;

   //   Search 
   if(search){
      query.$text = {$search : search} ;
   }

  
   // Price Filter
   if(minPrice || maxPrice){
      query.price = {} ;
      if(minPrice){
         query.price.$gte = Number(minPrice);
      }
      if(maxPrice){
         query.price.$lte = Number(maxPrice)
      }
   }
   
   if(category){
   query.category = category;
}

   // priceRange 
   if (priceRange) {

 const [min, max] = priceRange.split("-");

 query.selling_price = {
  $gte: Number(min),
  $lte: Number(max)
 };

}

   // Sorting

   let sortOption = {};

   if(sort === "low"){
      sortOption.price = 1 ;
   }

   if(sort === "high"){
      sortOption.price = -1 ;
   } 

    // pagination
   const page = parseInt(req.query.page) || 1;
   const limit = parseInt(req.query.limit) || 20 ;

   const skip = (page -1) * limit ;

 const products = await Product.find(query)
                         .sort(sortOption).skip(skip).limit(limit);

 const totalProducts = await Product.countDocuments(query)
  res.json({products , 
   totalPages: Math.ceil(totalProducts / limit),
    currentPage: page});


 } catch (error){
    console.log(error)
 throw new ApiError("Failed to fetch products", 500);

 }

});

module.exports = {
    getwomenProducts , getmenProducts
}

