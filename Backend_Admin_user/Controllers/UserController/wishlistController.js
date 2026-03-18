const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler");
const Wishlist = require("../../models/Wishlishmodel");
const Cart = require("../../models/CartModel");


/* ADD TO WISHLIST */

const addToWishlist = asyncHandler(async (req, res) => {

  const { productId } = req.body;
  const userId = req.user.id;

  const exists = await Wishlist.findOne({
    user: userId,
    product: productId
  });

  if (exists) {
    throw new ApiError("Product already in wishlist");
  }

  const wishlist = await Wishlist.create({
    user: userId,
    product: productId
  });

  res.json(wishlist);
});


/* GET WISHLIST */

const getWishlist = asyncHandler(async (req, res) => {

  const wishlist = await Wishlist.find({ user: req.user.id })
    .populate({
      path: "product",
      populate: { path: "category" }
    });

  res.json(wishlist);
});


/* REMOVE FROM WISHLIST */

const removeWishlist = asyncHandler(async (req, res) => {

  const { id } = req.params;

  await Wishlist.findByIdAndDelete(id);

  res.json({ message: "Removed from wishlist" });

});


/* MOVE TO CART */

const MoveToCart = asyncHandler(async (req, res) => {

  const { wishlistId } = req.body;

  const wishlistItem = await Wishlist.findById(wishlistId);

  if (!wishlistItem) {
    throw new ApiError("Wishlist item not found");
  }

  // check duplicate cart
  const exists = await Cart.findOne({
    user: wishlistItem.user,
    product: wishlistItem.product
  });

  if (!exists) {
    await Cart.create({
      user: wishlistItem.user,
      product: wishlistItem.product,
      quantity: 1
    });
  }

  // remove from wishlist
  await Wishlist.findByIdAndDelete(wishlistId);

  res.json({
    message: "Moved to cart successfully"
  });

});


module.exports = {
  getWishlist,
  addToWishlist,
  removeWishlist,
  MoveToCart
};