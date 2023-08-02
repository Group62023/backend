// Importing important packages
const express = require("express");
const users = require("../Model/users");

// Using express and routes
//const app = express();
const userRoute = express.Router();
//add new users
userRoute.post("/", async function (req, res) {
  const user = req.body;
  user.id = (await users.count()) + 1;
  const userresponse = await users.insertMany(req.body);
  res.json(userresponse);
});
//get all users
userRoute.get("/", async function (req, res) {
  const userresponse = await users.find();
  res.json(userresponse);
});
//getting one user
userRoute.get("/:id", async function (req, res) {
  const userresponse = await users.find({ id: req.params.id });
  if (userresponse.length < 1) {
    res.json("user not found,confirm user number");
  } else {
    res.json(userresponse);
  }
});

// To Update user Details
userRoute.put("/:id", async function (req, res) {
  await users.updateOne({ id: req.params.id }, req.body);
  res.json("user updated Successfully");
});
// To delete user
userRoute.delete("/:id", async function (req, res) {
  await users.deleteOne({ id: req.params.id });
  res.json("user deleted Successfully");
});
module.exports = userRoute;
