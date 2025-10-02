/*
========================================================
 File: routes/users.js
 Purpose:
 - Handle user-related routes
 - Show users page
 - Process new user submissions
========================================================
*/

const express = require("express");
const path = require("path");
const rootDir = require("../util_used/path");

// const { route } = require("../../3rdDay/routes/course");

const router = express.Router();

const bookData = require("./courses");

// route 1
// GET /users → show users page
router.get("/", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "users.html"));
  console.log({ bookTitle: bookData.course });
  const bookTitle = bookData.course;
  res.render("users", { bookDetails: bookTitle, author: "Ramji" });
});

// second route
// POST /users/add → handle new user submission
router.get("/add", (req, res) => {
  // this line not working
  console.log("New User Added:", req.body.username);
  // console.log("I AM FROM /USERS/ADD BY GET GROM USER.HTML");
  res.redirect("/users");
});

module.exports = router;
