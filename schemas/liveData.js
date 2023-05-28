const mongoose = require("mongoose");
const { Schema } = mongoose;

const liveDataSchema = new Schema({
  cryptoCurrency: {
    type: Object,
    properties: {
      name: String,
      image: String,
      code: String,
    },
  },

  price: {
    type: String,
    required: true,
  },
  marketCap: {
    type: String,
    required: true,
  },
  dayData: {
    type: String,
  },
});

module.exports = mongoose.model("LiveData", liveDataSchema);
