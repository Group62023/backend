// Importing important packages
const express = require("express");

// Using express and routes
//const app = express();
const caseListRoute = express.Router();

// CaseList module which is required and imported
let caseListModel = require("../Model/caseList");

// To Get List Of Cases
caseListRoute.get("/", async function (req, res) {
  const cases = await caseListModel.find();
  res.json(cases);
});

// To Add New Case
caseListRoute.post("/", async function (req, res) {
  const id = (await caseListModel.count()) + 1;
  const casebody = req.body;
  casebody.id = id;
  let caseList = new caseListModel(casebody);
  caseList.save();
  res.status(200).json({ caselist: "Case Submitted Successfully" });
});
// To Get Case Details By Case ID
caseListRoute.get("/:id", async function (req, res) {
  const casedetails = await caseListModel.find({ id: req.params.id });
  if (casedetails.length < 1) {
    res.json("case not found,confirm case number");
  } else {
    res.json(casedetails);
  }
});

// To Update The Case list Details
caseListRoute.put("/:id", async function (req, res) {
  await caseListModel.updateOne({ id: req.params.id }, req.body);
  res.json("Fraud Case updated Successfully");
});

// To Delete The Case
/*caseListRoute.delete('/:id',function(req, res) {
caseListModel.findByIdAndRemove({ _id: req.params.id }, function(err, caseList) {
if (err) res.json(err);
else res.json('caseList Deleted Successfully');
});
});*/

module.exports = caseListRoute;
