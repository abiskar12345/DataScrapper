const express = require("express");
const LiveDataController = require("../controllers/LiveDataController");
const router = express.Router();

router.route("/").get(LiveDataController.getLiveData);

module.exports = router;
