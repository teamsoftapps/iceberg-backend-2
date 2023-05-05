
const mongoose = require("mongoose");

const userNFTSchema = new mongoose.Schema({
    name: String,
    image: String,
    value: Number,
    info: String
})

const userNFT = mongoose.model("user_albert", userNFTSchema);

module.exports = userNFT;
export {};