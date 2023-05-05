const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const baseNftsRoutes = require("./routes/baseNftsRoutes");
const userNFTRoutes = require("./routes/userNFTRoutes");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    method: "GET,POST,PUT,PATCH,DELETE",
    credentias: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Express App...",
  });
});

app.use("/api/v1/base", baseNftsRoutes);
app.use("/api/v1/user-nft", userNFTRoutes);

const mongodbUri =
  "mongodb+srv://iceberguser:accesstoassessment@icebergassess.rbjxgi4.mongodb.net/iceberglabsassess";
// "mongodb://127.0.0.1:27017/jaro";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("App is running on PORT 4001");
});