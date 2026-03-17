const jwt = require("jsonwebtoken");

 const UserAuthCheck =  (req, res, next) => {
  const token = req.cookies.token;
  

  if (!token)
    return res.status(401).json({  msg: "Not authorized" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decoded;

  next();
};
module.exports = { 
    UserAuthCheck
}
