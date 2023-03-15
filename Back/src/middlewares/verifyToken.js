
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


 export const verifyUserToken =asyncHandler (async(req,res,next) =>{
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_KEY).user;
        req.user = await User.findOne({
          _id: decoded._id,
        }).select("-password");
        next();
      } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Not authorized" });
      }
    }
    if (!token) {
      res.status(401).json({ message: "No token provided, Login First to continue" });
    }
});

