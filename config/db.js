const mongoose = require("mongoose");

// const MONGO_URI =
//   process.env.NODE_ENV === "development"
//     ? process.env.MONGO_LOCAL_URI
//     : process.env.MONGO_URI;

const MONGO_URI =
  "mongodb+srv://iceberguser:accesstoassessment@icebergassess.rbjxgi4.mongodb.net/iceberglabsassess";

const DB = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    // console.log(db);
    console.log(`Connected to Database ${db.connections[0].host}`);
  } catch (error) {
    console.log("DB_ERROR", error);
    process.exit();
  }
};

module.exports = DB;
