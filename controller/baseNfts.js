const Base = require("../model/baseNftsSchema");
const AsyncHandler = require("../utils/AsyncHandler");
const ErrorHandler = require("../utils/ErrorHandler");

const getAllBaseNfts = AsyncHandler(async (req, res, next) => {
  const allBaseNfts = await Base.find().sort({ value: -1 });

  if (!allBaseNfts) {
    return next(new ErrorHandler("Invalid or no data found", 400));
  }

  res.status(200).json({
    status: "success",
    data: allBaseNfts,
  });
});

module.exports = { getAllBaseNfts };
