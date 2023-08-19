import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      //Options for the connect method to parse the URL
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Remove the useFindAndModify option
      // useFindAndModify: false,
      dbName: "BullBearAnalytics",
    })
    .then(() => console.log("Db Connected"))
    .catch((err) => console.log("Error: Connecting to MongoDB: ", err));
};

export default dbConnect;
