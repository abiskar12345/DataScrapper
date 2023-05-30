const mongoose = require("mongoose");
const { Schema } = mongoose;

const notification = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Notification", notification);
