const{ UploadManyimages } = require("../utills/cloudinaryUpload");

const Category = require(".././models/CategoryModel");
const saveProduct = async (req, res) => {

  try {

    const data = await Category.find();

    for (const item of data) {

      const cloudImages = await UploadManyimages(item.image);

      await Category.updateOne(
        { _id: item._id },
        {
          $set: {
            image: cloudImages
          }
        }
      );

    }

    res.json({
      message: "Images uploaded to Cloudinary",
      count: data.length
    });

  } catch (error) {

    res.status(500).json({
      message: "Error uploading images",
      error: error.message
    });

  }

};

module.exports = { saveProduct };
