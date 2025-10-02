const express = require("express");
const path = require("path");
const rootDir = require("../util_used/path");

// const { route } = require("../../3rdDay/routes/course");

const router = express.Router();

// route 1
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

// second route
router.post("/add", (req, res) => {
  // this line not working
  console.log("New User Added:", req.body.username);
  res.redirect("/users");
});

module.exports = router;
