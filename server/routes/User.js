import express from "express";
const userRoute = express.Router();
import asyncHandler from "express-async-handler";
// import User from "../models/User";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// const usersRoute = express.Router();
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
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      //set status code
      res.status(200);

      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.password,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  })
);

//Update User
userRoute.put("/update", (req, res) => {
  res.send("Update route");
});

//Delete User ends with :id to make use of it being dynamic
userRoute.delete("/:id", (req, res) => {
  res.send("Delete route");
});

//fetch users

userRoute.get("/", (req, res) => {
  res.send("Fetch route");
});

export default userRoute;

// async (req,res) =>
// {
//         try {
//         const {name, email, password} = req.body;
//         const user = await User.create({name, email, password})
//         console.log(user);
//         res.send(user)
//         }catch (error) {
//         res.send(error)
//         }
// }
