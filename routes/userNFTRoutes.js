const { createUserNFT, getAllUsersCollection, updateUserNFT } = require("../controller/userNFT");

const router = require("express").Router();

router.route("/").get(getAllUsersCollection).post(createUserNFT);
router.route("/update-nft").patch(updateUserNFT);


module.exports = router;
