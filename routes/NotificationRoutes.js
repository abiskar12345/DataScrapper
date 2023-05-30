const express = require("express");
const NotificationController = require("../controllers/NotificationController");
const router = express.Router();

router.route("/user/:id").get(NotificationController.getUserNotification);

module.exports = router;
