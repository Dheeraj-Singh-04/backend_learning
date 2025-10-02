const express = require("express");
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("root path");
});
// query search
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Nothing searched");
  } else {
    res.send(`These are search query: ${q}`);
  }
  // http://localhost:8080/search?q=dheeraj
});
app.get("/about", (req, res) => {
  res.send("about page");
});
// app.get("*", (req, res) => {
//   res.send("page not found");
// });

// about path parameter
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome at the page of @ ${username}, your id is${id}`);
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
