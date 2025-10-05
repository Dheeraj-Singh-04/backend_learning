const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //by using this, we can start server from anywhere (nodemon Express/Template/EJS/index.js), viwes folder can render now. If you not use this, you always need to start the server from the same directory of the server (nodemon index.js)

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.send("Hello guys");
});

app.get("/dice", (req, res) => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { diceValue }); // we pass the data in the form of key:value pair
});

app.get("/ig/:username", (req, res) => {
  let name = ["dheeraj", "sawan", "jasnoor", "jashan"];
  let { username } = req.params;
  res.render("ig.ejs", { username, name });
});

// data.json file route
app.get("/detail/:username", (req, res) => {
  let { username } = req.params;
  let receivedData = require("./data.json");
  let data = receivedData[username];
  // console.log(data);
  if (data) {
    res.render("instaData.ejs", { data });
  } else {
    res.render("noAccount.ejs");
  }
});

app.listen(PORT, () => {
  console.log(`Server start at the port${PORT}`);
});


// for more info check the ejs.co 