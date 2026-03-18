const express = require("express");
const router = express.Router();

const  {  UserAuthCheck }  =  require("../../midleware/UserAuthMiddleware")
const {
  getWishlist , addToWishlist ,removeWishlist ,MoveToCart
} = require("../../Controllers/UserController/wishlistController")

router.post("/add",UserAuthCheck, addToWishlist);
router.get("/", UserAuthCheck ,getWishlist);
router.delete("/:id",UserAuthCheck, removeWishlist);
router.post("/move-to-cart", UserAuthCheck, MoveToCart);

module.exports = router;

