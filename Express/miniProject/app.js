const express = require("express");
const app = express();
const body_parser = require("body-parser");
const PORT = 3000;
// by using below statement, we dont need to write the __dirName and the entire path of file
const nameDir = require("./util/path");
const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");
const path = require("path");
// use of body parser function
app.use(body_parser.urlencoded({ extended: false }));

// use of filtering
app.use("/books", bookRouter);
app.use("/users", userRouter);

// creation of static files
app.use(express.static(path.join(nameDir, "public")));

// creation of route's

// first route
app.get("/", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "index.html"));
});

// page not found
// app.get("*", (req, res) => {
//   res.sendFile(path.join(nameDir, "views", "pageNotFound.html"));
// });
app.get("/", (req, res) => {
  res
    .status(404)
    .res.sendFile(path.join(nameDir, "views", "pageNotFound.html"));
});

// server start
app.listen(PORT, () => {
  console.log("Server start at port number", PORT);
});
