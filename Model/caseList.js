const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Caselist schema
let caseList = new Schema({
  id: { type: "string" },
  mobileno: { type: "string" },
  fraudtype: { type: "string" },
  progress: { type: "string", default: "submitted" },
  comment: { type: "string" },
});
module.exports = mongoose.model("caselist", caseList);