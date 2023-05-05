const express = require("express");
const cors = require("cors");
const DB = require("./config/db");
const ErrorHandler = require("./utils/ErrorHandler");
const GlobalErrorMiddleware = require("./middleware/GlobalError");
const baseNftsRoutes = require("./routes/baseNftsRoutes");
const userNFTRoutes = require("./routes/userNFTRoutes");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();

//DATABASE_CONNECTION
DB();

// GLOBAL_MIDDLEWARES

// SET SECURITY HTTP HEADER
// its a collection of 14 small middlewares
app.use(helmet());

// express limitter to prevent too many request same IP
const limitter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour!",
});
app.use("/api", limitter);

// body parser for reading data into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// cors middleware for handling request from frontend
app.use(
  cors({
    origin: "*",
    method: "GET,POST,PUT,PATCH,DELETE",
    credentails: true,
  })
);

// ROUTES MIDDLEWARE
app.use("/api/v1/base", baseNftsRoutes);
app.use("/api/v1/user-nft", userNFTRoutes);


app.get("/", (req:any, res:any) => {
  res.send("Hello from my web server...");
});

// ERROR IF ROUTES NOT FOUND
app.all("*", (req:any, res:any, next:any) => {
  next(
    new ErrorHandler(`Can't find route with ${req.originalUrl} this Url!`, 404)
  );
});

// GLOBAL ERROR MIDDLEWARE
app.use(GlobalErrorMiddleware);

module.exports = app;