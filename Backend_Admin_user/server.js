const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config(); 
const cookieParser = require("cookie-parser");
const errorHandler = require("./midleware/ErrorMiddleware");
const cors = require("cors");
// This registers the "Category" model

const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use(cors({
  origin:["http://localhost:5173",
         "http://localhost:5174"],
  credentials: true
}));


const UserAuthRoute = require("./routers/UserRoute/AuthRoute")
const productRoutes = require("./routers/UserRoute/ProductRoute");
const CartRoutes = require("./routers/UserRoute/CartRoute");
const CategoryRoute = require("./routers/UserRoute/CategoryRoute")

app.use("/uploads/Clothimages", express.static("uploads/Clothimages"));

app.use("/api" , productRoutes ) ;
app.use("/api/auth" , UserAuthRoute );
app.use("/api/cart" , CartRoutes );
app.use("/api/category", CategoryRoute );

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
});
















