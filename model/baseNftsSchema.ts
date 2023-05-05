const mongoose = require("mongoose");

const baseNftsSchema = new mongoose.Schema({
    _id: String,
    name: String,
    image: String,
    value: Number,
    info: String
})

const Base = mongoose.model("base_nfts", baseNftsSchema);

module.exports = Base
export {};