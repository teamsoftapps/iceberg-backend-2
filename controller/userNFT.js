const userNFT = require("../model/userNFTSchema");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/ErrorHandler");

const getAllUsersCollection = AsyncHandler(async (req, res, next) => {
    const allUserCollection = await userNFT.find().sort({ value: -1 });

    if (!allUserCollection) {
        return next(new ErrorHandler("Invalid or no data found", 400));
    }

    res.status(200).json({
        status: "success",
        data: allUserCollection,
    });
});

const createUserNFT = AsyncHandler(async (req, res, next) => {
    const usersNFT = await userNFT.create(req.body);

    res.status(201).json({
        status: "success",
        message: "NFT Added.",
        data: {
            usersNFT,
        },
    });
});

const updateUserNFT = AsyncHandler(async (req, res, next) => {
    const name = req.body.name;
    const value = req.body.value;
    const info = req.body.info;
    console.log("req", req.body);
    const updateNFT = await userNFT.findOneAndUpdate({ name }, { value: value, info: info }, { new: true });

    res.status(200).json({
        status: "success",
        message: "NFT Updated.",
        data: {
            updateNFT
        }
    });
});

module.exports = { getAllUsersCollection, createUserNFT, updateUserNFT };
