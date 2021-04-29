// Import mongoose
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// create feature schema
const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  featureUrl: {
    type: String,
    required: true,
  },
  itemId: {
    type: ObjectId,
    ref: "Item",
  },
});

// exports featureSchema
module.exports = mongoose.model("Feature", featureSchema);
