const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  role: {
    type: String,
    enum: ["User", "Product_admin", "admin"],
    default: "User"
  },

  avatar: {
    type: String,
    default: ""
  },
   blocked: {
        type: Boolean,
        default: false,
 },

},
{
  timestamps: true
}
);


const User = mongoose.model("User", userSchema);

module.exports = User ;

