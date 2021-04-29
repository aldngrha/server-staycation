// Import mongoose
const mongoose = require("mongoose");

// create bank schema
const bankSchema = new mongoose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  rekening: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// exports bankSchema
module.exports = mongoose.model("Bank", bankSchema);
