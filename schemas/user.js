const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  email: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("User", user);
