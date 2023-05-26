const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("LiveData", liveDataSchema);
