const mongoose = require("mongoose");
var uri = process.env.DB_HOST + process.env.DB_NAME;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`${process.env.DB_NAME}  Database CONNECTED `);
    }
  }
);
