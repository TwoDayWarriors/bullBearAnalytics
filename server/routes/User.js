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
// Import necessary modules and User model

 

const router = express.Router();

 

// ...

 

// Login route
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

 

  // Find the user with the provided email
  const user = await User.findOne({ email });

 

  if (user && await user.isPasswordMatch(password)) {
    // Generate and send a JWT token to the client for authentication
    // You might want to implement this based on your authentication strategy
    const token = generateToken(user._id);

 

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}));

 

// ...
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

