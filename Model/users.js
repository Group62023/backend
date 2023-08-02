const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Users schema
let user = new Schema({
  id: { type: "string" },
  username: { type: "string" },
  password: { type: "string" },
  role: { type: "string" },
});
module.exports = mongoose.model("user", user);
