const express = require("express");
const router = express.Router();
const { AddtoCart ,GetCart ,RemoveCartitem ,UpdateCartQty } = require("../../Controllers/UserController/AddtocartControllers");
const  {  UserAuthCheck }  =  require("../../midleware/UserAuthMiddleware")


router.post("/add",  UserAuthCheck , AddtoCart);
router.get("/list",  UserAuthCheck , GetCart );
router.delete("/:id",UserAuthCheck , RemoveCartitem);
router.put("/update/:id",UserAuthCheck, UpdateCartQty)


module.exports = router;