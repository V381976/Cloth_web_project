const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

 brand: {
  type: String,
  required: true
},
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },

  color: String,
 gender: String,
  description: String,

  image: [
    {
      type: String
    }
  ],

  price: {
    type: Number,
    required: true
  },

  selling_price: {
    type: Number,
    required: true
  },

  discountPercentage: {
    type: Number,
    default: 0
  },

  currency: {
    type: String,
    default: "INR"
  },

  sizes: [
    {
      type: String
    }
  ],

  stock: {
    type: Number,
    default: 0
  },

  ratings: {
    type: Number,
    default: 0
  },

  isFeatured: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });


//  Indexes for efficient querying  

productSchema.index({ category: 1 });
productSchema.index({ brand: 1 });
productSchema.index({ selling_price: 1 });
productSchema.index({price:1});
productSchema.index({ gender: 1 });

productSchema.index({ title: "text" });

productSchema.index({ category: 1, selling_price: 1 });


const Product = mongoose.model("Product", productSchema);

module.exports = Product;