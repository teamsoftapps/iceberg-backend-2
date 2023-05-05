const logger = require("morgan");
const http = require("http");
const dotenv = require("dotenv");

//IT'S A SYNCRONOUS ERROR HANDLING UNCAUGHT EXCEPTION ERROR
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! SERVER IS SHUTTING DOWN");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const _app = require("./app");

const server = http.createServer(_app);

// LISTENING SERVER
const PORT = process.env.PORT || 8080;

const appServer = server.listen(PORT, () => {
  console.log(
    `Server is runnning in production mode on port ${PORT}`
  );
});

// HANDLING UNHANDLED PROMISE REJECTION ERROR
process.on("unhandledRejection", (err:any) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! SERVER IS SHUTTING DOWN");
  appServer.close(() => {
    process.exit(1);
  });
});