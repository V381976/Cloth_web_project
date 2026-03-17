const express = require("express");
const router = express.Router();
const {UserSignUp , UserLogin  ,ProfileCheck , UserLogout} = require("../../Controllers/UserController/AuthControllers");
const  {UserAuthCheck}  =  require("../../midleware/UserAuthMiddleware")


router.post("/signup" ,UserSignUp) ;
router.post("/login" ,UserLogin ) ;
router.post("/logout",  UserLogout);
router.get("/profile" ,UserAuthCheck,ProfileCheck );

module.exports = router;