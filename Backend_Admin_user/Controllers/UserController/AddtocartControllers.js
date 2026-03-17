const Cart  = require("../../models/CartModel");
const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler"); 
const Product = require("../../models/ProductModel");


const AddtoCart = asyncHandler(async (req, res) => {

  try {

    const { productId } = req.body;
    const userId = req.user.id;

    const existingItem = await Cart.findOne({
      user: userId,
      product: productId
    });

    // 👇 FIX
    if (existingItem) {

      existingItem.quantity += 1;
      await existingItem.save();

      await existingItem.populate("product");

      return res.json(existingItem);
    }

    const cartitem = await Cart.create({
      user: userId,
      product: productId,
      quantity: 1
    });

    await cartitem.populate("product");

    res.json(cartitem);

  } catch (error) {
    console.log(error);   // 👈 debugging ke liye important
    throw new ApiError("Cart not saved", 500);
  }

});

const GetCart =  asyncHandler( async(req ,res) =>{
         try{
            const cartItems =  await Cart.find({ 
                               user : req.user.id }).populate("product");
                               res.json(cartItems) ;
         } catch(err){
          console.log(err)
            throw  new ApiError("Not get req approve " , 500)
         }
    })

    const RemoveCartitem = asyncHandler(
        async(req ,res) =>{
     try {
         await Cart.findByIdAndDelete(req.params.id);
         res.json({ message :"Item  Removed"});
     } catch {
           throw new ApiError("Item was not removed  please try again ") ;
     }
        })

const UpdateCartQty = asyncHandler(async (req,res)=>{

 const { quantity } = req.body;

 const cartItem = await Cart.findById(req.params.id);

 if(!cartItem){
  throw new ApiError("Cart item not found",404);
 }

 cartItem.quantity = quantity;

 await cartItem.save();

 const item = await cartItem.populate("product");

 res.json(item);

});



module.exports  = {
     AddtoCart ,GetCart ,RemoveCartitem ,UpdateCartQty
}