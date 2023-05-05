const { getAllBaseNfts } = require("../controller/baseNfts");

const router = require("express").Router();

router.route("/").get(getAllBaseNfts);

module.exports = router;
