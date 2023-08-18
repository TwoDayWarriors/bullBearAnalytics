// authMiddleware.js
import jwt from "jsonwebtoken";
import User from '../models/User';

const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded.id);
      if (user) {
        req.user = user; // Set the user object in the request
        next(); // Move on to the next middleware
      } else {
        res.status(401);
        throw new Error("User not found");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

export default authMiddleware;

// import asynHandler from 'express-async-handler';
// import jwt from 'jsonwebtoken';
// import User from'../models/User';

// const authMiddleware = asynHandler(async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//       const user = await User.findById(decoded.id);
//       req.user = user;
//       next();
//     } catch (error) {
//       res.status(401);
//       throw new Error('Not authorised, invalid token');
//     }
//   }
// });

// export default authMiddleware;
