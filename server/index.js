import express from "express";
import dotenv from "dotenv";
import errorMiddlewareHandler from "./middlewares/errorMiddlewareHandler.js";
import usersRoute from "./routes/User.js";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5000"],
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors());

dotenv.config();
dbConnect();


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