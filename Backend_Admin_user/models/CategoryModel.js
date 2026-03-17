const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  image: {
    type: String
  } ,

   slug: {
    type: String
  },

  gender: {
    type: String,
    enum: ["men", "women", "kids"]
  },

}, { timestamps: true });


const Category = mongoose.model("Category", categorySchema);


module.exports = Category ;
