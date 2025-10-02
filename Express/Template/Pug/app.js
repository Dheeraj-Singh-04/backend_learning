/*
  ========================================================
  Main Entry File: app.js
  Purpose:
  - Setup Express server
  - Configure middleware (body-parser, static files)
  - Define routes for courses, users, and home page
  - Handle 404 errors
  ========================================================
  */

const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const app = express();
const PORT = 3000;

// Import route files
const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/users");

// middleware to connect with courseRouter
// Routes
app.use("/courses", courseRoutes.router); // handle /courses
app.use("/users", userRoutes); // handle /users/*


app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(express.static(path.join(__dirname, "public"))); // static files

// pug setup
app.set("view engine", "pug");
app.set("views", "views");

// Home page
app.get("/", (req, res, next) => {
  //   res.status(404).send("<h1>Page not found</h1>");
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 404
app.use("/", (req, res, next) => {
  //   res.status(404).send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//   start server
app.listen(PORT, () => {
  console.log("Server is start at port number", PORT);
});
