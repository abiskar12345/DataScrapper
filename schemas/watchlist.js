const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchListSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  code: {
    type: String,
    required: true,
  },
  lowPrice: {
    type: String,
    required: true,
  },
  highPrice: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WatchList", watchListSchema);
