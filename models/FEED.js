const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEEDSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 15,
    },
    message: {
      type: String,
      required: true,
      maxLength: 40,
    },
    created_time: {
      type: String,
    },
    created_date: {
      type: String,
    },
  },
  { timestamps: true }
);

const FEED = mongoose.model("Feed", FEEDSchema);

module.exports = FEED;
