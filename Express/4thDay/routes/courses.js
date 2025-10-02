const express = require("express");
const path = require("path");
const rootDir = require("../util_used/path");
// const { route } = require("../../3rdDay/routes/course");

const router = express.Router();

// route 1
router.get("/add", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addCourse.html"));
});

// second route
router.post("/add", (req, res) => {
  console.log("New courses Added=> ", req.body.CourseName);
  // console.log("BY POST METHOD FROM ADDCOURSE.HTML");
  res.redirect("/courses");
});

// third route
// working
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "courses.html"));
});

module.exports = router;

// what is routing
// routing is a process of selecting a path for traffic in a network or between or across multiple networks
