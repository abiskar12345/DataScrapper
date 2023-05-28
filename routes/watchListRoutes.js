const express = require("express");
const router = express.Router();
const WatchListController = require("../controllers/WatchListController");
const { addValidate } = require("../validators/watchListvalidator");
const validator = require("../validators/validator");

router
  .route("/")
  .get(WatchListController.getwatchList)
  .post(addValidate, validator, WatchListController.add);

router
  .route("/:id")
  .patch(WatchListController.update)
  .delete(WatchListController.remove)
  .get(WatchListController.getById);

module.exports = router;
