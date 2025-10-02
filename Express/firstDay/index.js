// check readme file for installation direction's

const express = require("express");
// import express from "express";

// both 3/4 lines are used to import the express
// Differnce btw 3/4 lines
// require("express")(line no 3):=>
// this is commonJS syntax -> Default in Node.js projects -> works if our project does not have "type": "module" in package.json

// import express from "express" (line no 4):=>
// This is ES Module (ESM) syntax
// works if we have set "type":"module" in package.json -> { "type" : "module"}

// we don't need both at the same tym. Use either require(default in node) or import(if using ESM)

const app = express();
// here, an instance of express is created

const PORT = 3000;
// port number is defined here

// starting with route's

// first route
// app.use() is a middleware
// Middleware function that has directly access to :
// req,res,next
// req=> request object
// res=> response object
// next=> function to move to next middleware
// use()=> it takes two parameter
// one is route
// second is a callback function
// callback has three parameter
// make sure the order of parameter should be correct

app.use("/srk", (req, res, next) => {
  res.send("<h1>About page</h1>");
  // here, in response an heading tag is returned
  //   next();
});

// reason why next() is commented here
// when we call res.send() -> express ends the response -> sends data back to the client -> after sending the response, -> no need to continue the next middleware/route

//what if we call next() after -> res.send() -> express will try to continue to the next middleware, which usually causes an error like -> Error: cannot set headers after they are sent to the client -> bcs the response is already has been send

// when to use next()
// we use -> next() -> if we want the request to continue to the next middleware/route
// used in -> Logging, Authentication and Custom middleware(eg modify req obj before sending to response), error handling

app.use("/aks", (req, res, next) => {
  res.send("<h1>contact page</h1>");
  //   next();
});

app.use("/", (req, res, next) => {
  console.log("Root route");
  res.send("<h1>Home page</h1>");
  //   next();
});


// here, we start the server using listen() method
// it takes two parameter one is PORT NUMBER
// and callback function
// we can decide what to do on the staring of our server
app.listen(PORT, () => {
  console.log("Server is start at port number", PORT);
});
