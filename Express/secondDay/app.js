const express = require("express");

const bodyParser = require("body-parser");
// Today, we have learned about a new package which is "body-parser"
// Open terminal -> npm i body-parser-> package will be installed in our directory
// body-parser is a middleware that helps Express to handle incoming request data, especially form data (POST request) or JSON data.
// By default, Node.js does not automatically parse the body of incoming requests.
// body-parser data nu readable form vich convert krdinda a, simple -> ty fer appa use krskddey a "req.body"

// without body parser
// if someone submit a form-> like->
// <form action='/course' method='POST'>" +
//      "<input type='text' name='Yourcourse' placeholder='addCourse'/>" +
//      "<button type='submit'>Add Course</button> </form>

// we won't be able to access "req.body.Yourcourse" -> We just get undefined

// with body parser, the form data parsed and we can directly use-> console.log(req.body.Yourcourse)

const app = express();

const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({extended:true}));

// about 25 line:=>
// this tells the express to use body-parser middleware for every incoming request -> specifically ->urlencoded() is used to parse form data
// urlencoded()-> requires an option object -> without this obj, express will show a depredcation warning
// extended : false -> parse data only as strings or array
// extended : true -> allows rich objs and nested structure's 

// first route
app.use("/abc", (req, res, next) => {
  res.send("<h1>Through /abc route</h1>");
});

// second route
app.use("/addcourse", (req, res, next) => {
  res.send(
    "<form action='/course' method='POST'>" +
      "<input type='text' name='Yourcourse' placeholder='addCourse'/>" +
      "<button type='submit'>Add Course</button> </form>"
  );
});

// third route
app.post("/course", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>This is course page through POST method</h1>");
});

//for get method
// fourth route
app.get("/course", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>This is course page through get method</h1>");
});

//route routes
app.get("/", (req, res, next) => {
  res.send("<h1>Home page</h1>");
});

//   start server
app.listen(PORT, () => {
  console.log("Server is start at port number", PORT);
});


// About use(),get() and post() 

// use() -> used to define middleware or routes that work for all HTTP methods (GET,POST,PUT,DELETE etc.) at given path.
// examples to use -> Logging,authentication,body parsing

// get() -> to handle GET requests(usually for fetching data)
// works only for -> GET method
// example usage -> Reading data from server, fetching data like /users,/products

// post() -> To handle POST requests(usually for creating/sending data)
// works only for POST method
// example usage -> Sending form data, creating a record, submitting forms, creating new data
