const express = require("express");
const nameDir = require("../util/path");
const path = require("path");
// const { route } = require("../../3rdDay/routes/course");
const router = express.Router();

// creation of route's

// first route
// working
router.get("/", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "books.html"));
});

// second route
// working
router.get("/add", (req, res) => {
  console.log("hello from GET METHOD THROUGH /books/add");
  res.sendFile(path.join(nameDir, "views", "addBook.html"));
  // not getting book name o the console
});

// third route
// working
// router.post("/add", (req, res) => {
//   console.log("I AM FROM /BOOKS/ADD BY POST");
//   console.log(req.body.value);
//   // book name not printing over the terminal
//   res.redirect("/books/add");
//   //   this is bcz appa redirect hoky fr dubarey book add wala form open kr skiye
// });

// additinal thing
router.post("/add", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(nameDir, "views", "addBookBtn.html"));
});

module.exports = router;
