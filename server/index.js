import express from "express";
import dotenv from "dotenv";
import errorMiddlewareHandler from "./middlewares/errorMiddlewareHandler.js";
// import usersRoute from "./routes/usersRoute.js";
import usersRoute from "./routes/user.js";
// import dbConnect from "./config/dbConnect.mjs";
import dbConnect from "./config/dbConnect.js";

dotenv.config();
dbConnect();

const app = express();

//Passing body data
app.use(express.json());

//Routes
//Users
app.use("/api/users", usersRoute);

// Test message
app.get("/message", async (req, res) => {
  res.send({ message: "this is a test!!" });
});

//Error middleware
app.use(errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

