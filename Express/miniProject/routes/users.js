const express = require("express");
const path = require("path");
const nameDir = require("../util/path");
// const { route } = require("../../3rdDay/routes/course");
const router = express.Router();

// creation of route's

// first route
// working
router.get("/", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "userList.html"));
});

// second route
// working but not redirect to router.post()
router.get("/add", (req, res) => {
  // to check how navbar icons behave, from here I come to know that, icons behave like get()
  // console.log("From get");

  res.sendFile(path.join(nameDir, "views", "users.html"));
});

// third route
// working
// router.post("/add", (req, res) => {
//   console.log("From post");
//   console.log(req.body);
//   res.redirect("/users/add");
// });

// additional thing
// working
router.post("/add", (req, res) => {
  console.log("Hello from post add of users routes");
  console.log(req.body);
  res.sendFile(path.join(nameDir, "views", "userAddbtn.html"));
});

module.exports = router;
