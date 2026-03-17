const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler");
const Category = require("../../models/CategoryModel"); 



const getAllCategories = asyncHandler(async (req, res) => {
  try{ 
    const {gender} = req.query 
    let query = {} 
    if(gender){
      query.gender = gender
    }

  const categories = await Category.find(query);

  res.json(categories);
  }
  catch{
    throw new ApiError("Failed to fetch Category", 500);
  }
});

module.exports = {
       getAllCategories 
}


