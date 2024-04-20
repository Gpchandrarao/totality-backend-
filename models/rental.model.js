const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  prices: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;
