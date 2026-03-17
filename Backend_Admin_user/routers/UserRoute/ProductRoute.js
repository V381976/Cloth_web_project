const express = require("express");
const router = express.Router();

const {   getwomenProducts ,  getmenProducts} = require("../../Controllers/UserController/ProductController");
const {saveProduct} = require("../../Controllers/ClounneryUpload")
router.get("/womenCloth", getwomenProducts); 
router.get("/menCloth",  getmenProducts); 
router.get("/cloudinary-upload", saveProduct);

module.exports = router;
