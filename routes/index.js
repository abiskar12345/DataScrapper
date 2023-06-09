var express = require("express");
const apiRoutes = function (app) {
  app.use("/", express.static(__dirname + "/../public"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/v1/watchlist", require("./watchListRoutes"));
  app.use("/api/v1/livedata", require("./LiveDataRoutes"));
  app.use("/api/v1/login", require("./LoginRoutes"));
  app.use("/api/v1/notifications", require("./NotificationRoutes"));

  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
};
module.exports = apiRoutes;
