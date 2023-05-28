var express = require("express");
const apiRoutes = require("./routes");
require("dotenv").config();
var app = express();
require("./dbConfig");
const cronJob = require("./scheduler");
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS ,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, access-token"
  );
  next();
});
apiRoutes(app);
cronJob.start();

module.exports = app;
