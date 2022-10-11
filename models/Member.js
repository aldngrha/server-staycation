// Import mongoose
const mongoose = require("mongoose");

// create member schema
const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

// exports memberSchema
module.exports = mongoose.model("Member", memberSchema);
