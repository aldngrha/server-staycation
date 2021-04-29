// Import mongoose
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// create category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: ObjectId,
      ref: "Item",
    },
  ],
});

// exports categorySchema
module.exports = mongoose.model("Category", categorySchema);
