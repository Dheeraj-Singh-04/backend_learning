const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/users");
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

// middleware to connect with courseRouter
// filtering
app.use("/courses", courseRoutes);
app.use("/users", userRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

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
