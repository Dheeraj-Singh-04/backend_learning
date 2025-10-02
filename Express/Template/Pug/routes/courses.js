/*
========================================================
 File: routes/courses.js
 Purpose:
 - Handle course-related routes
 - Serve course list and add course form
 - Process new course submissions
========================================================
*/

const express = require("express");
const path = require("path");
const rootDir = require("../util_used/path");

const router = express.Router();
const course = [];

// route 1
// GET /courses/add → show form to add new course
router.get("/add", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addCourse.html"));
});

// second route
// POST /courses/add → handle new course submission
router.post("/add", (req, res) => {
  console.log("New courses Added=> ", req.body.CourseName);
  // console.log("BY POST METHOD FROM ADDCOURSE.HTML");
  course.push({ title: req.body.CourseName, description: "Your Course" });
  console.log(course);
  res.redirect("/courses");
});

// third route
// working
// GET /courses → show list of courses
router.get("/", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "courses.html"));
  res.render("courses");
});

// module.exports = router;
exports.router = router;
exports.course = course;

// what is routing
// routing is a process of selecting a path for traffic in a network or between or across multiple networks
