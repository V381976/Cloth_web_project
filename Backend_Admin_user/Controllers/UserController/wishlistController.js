const Product = require("../../models/ProductModel");
const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler"); 
const  Wishlist = require("../../models/Wishlishmodel");

const  addToWishlist = asyncHandler(
    async(req,res)=>{
    try {
        const {productId} = req.body ;
        const userId = req.user.id ;

        const exists = await Wishlist.findOne({
            user :userId ,
            product : productId
        });
        if(exists){
            throw new ApiError("Product alreday add Wishlist")
        }
        const wishlist = await Wishlist.create({
            user :userId ,
            productId
        })
        res.json( wishlist) ;
    } catch{
    throw new ApiError("Product not found" ,500 )
    }
})

const getWishlist = asyncHandler(
   
    async(req,res) =>{
         try{
         const userId = req.user.id;

  const wishlist = await Wishlist.find({ user: userId })
    .populate("product");

     res.json(wishlist); 
    } 
  catch{
    throw new ApiError(" Product not  get  allow " ,500)
}
    })


module.exports ={
    
}