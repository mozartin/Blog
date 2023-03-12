const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEEDSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    title: {
      type: String,
      required: true,
      minLength: 5,
    },
    message:  {
      type: String,
      required: true,
      minLength: 20,
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
