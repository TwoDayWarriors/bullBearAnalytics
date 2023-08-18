import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


const userRoute = express.Router();

//register
userRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User Exist");
    }
    const userCreated = await User.create({ email, name, password });

    res.send(userCreated);
  })
);

//Login
//Login
userRoute.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  })
);


//Update User
userRoute.put(
  "/update/:id",
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      res.status(200);
      res.json(user);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed')
    }
  })
);

//Delete User ends with :id to make use of it being dynamic
userRoute.delete("/delete/:id", asyncHandler( async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
    throw new Error('Server Error');
  }
}));

//fetch users

userRoute.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export default userRoute;

