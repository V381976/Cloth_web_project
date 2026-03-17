const express = require("express");
const router = express.Router();

const {  getAllCategories }= require("../../Controllers/UserController/CategoryControllers");

router.get("/cloth" ,  getAllCategories ) ;

module.exports = router;