// Import mongoose
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// create activity schema
const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  itemId: {
    type: ObjectId,
    ref: "Item",
  },
});

// exports activitySchema
module.exports = mongoose.model("Activity", activitySchema);
