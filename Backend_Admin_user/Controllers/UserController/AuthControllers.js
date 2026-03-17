const User = require("../../models/UserModel")
const ApiError = require("../../utills/AppError");
const asyncHandler = require("../../utills/asyncHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Token Create  With  JWT 
const createToken = (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

const UserSignUp = asyncHandler(async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // check empty fields
    if (!name || !email || !password) {
      throw new ApiError("All fields are required", 400);
    }

    // user check
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new ApiError("User Already Exists", 409);
    }

    // password hash
    const hashed = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashed
    });

    // create token
    const token = createToken(user._id);

    // cookie set
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      msg: "SignUp success",
      user: {
        id: user._id,
        name,
        email
      }
    });

  } catch (err) {
    throw err;
  }

});

const UserLogin = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError("All fields are required", 400);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError("Invalid Email", 401);
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new ApiError("Invalid Password", 401);
  }

  const token = createToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.json({
    msg: "Login success",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });

});

const UserLogout =  asyncHandler( async(req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "Logout successful" });
});

const ProfileCheck = asyncHandler(async (req, res) => {

  const user = await User.findById(req.user.id)
.select("-password");
  res.json({
    user
  });

});

module.exports = {
UserSignUp , UserLogin   , UserLogout, ProfileCheck
}