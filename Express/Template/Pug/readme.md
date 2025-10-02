# /\*

# Dynamic Contents and Template Engines in Express.js

1. Why templates?

   - Render more than just static HTML
   
   - Generate dynamic output (e.g., product list from database)
   
   - Even without a database, we can manage data in memory
   
   - Replace placeholders with actual values
   
   - Produce an HTML file on the fly and send it to the client

2. Template Engines:
   
   - Allow writing "HTML-ish" templates with placeholders
   
   - Logic (loops, conditions) can be embedded
   
   - Three popular free engines: EJS, Pug, Handlebars

---

## EJS (Embedded JavaScript Templates)

- Syntax close to plain HTML with JS snippets

- Output variable: <%= user %>

- Loop:

  <% items.forEach(item => { %>

     <li><%= item %></li>

  <% }) %>

- Condition:

  <% if (isAdmin) { %> Admin <% } %>

- Comment:

  <%# This will not be rendered %>

---

## Pug (formerly Jade)

- Indentation-based, no closing tags

- Output variable: h1 Welcome #{user}

- Loop:

  ul

  each item in items

  li= item

- Condition:

  if isAdmin

  p Admin Access

- Comment:

  //- Not rendered in HTML

  // Will render as HTML comment

---

## Handlebars (hbs / mustache style)

- Very readable, {{ }} syntax

- Output variable: {{user}}

- Loop:

  {{#each items}}

    <li>{{this}}</li>

  {{/each}}

- Condition:

  {{#if isAdmin}} Admin {{else}} User {{/if}}

- Comment:

  {{!-- This is a comment --}}

===========================================================
Summary:

- EJS → HTML + embedded JS (<% %>)

- Pug → Clean, indentation-based (no < > tags)

- # Handlebars → Mustache style ({{ }}) with minimal logic

  \*/

# /\*

# Using Template Engine (Pug) with Express.js

1. app.set()

   - Allows setting global configuration values for Express

   - Syntax: app.set(name, value)

   - Commonly used keys:

     - "view engine" → which template engine to use

     - "views" → directory where template files are stored

2. Setup Example:

   const app = express();

   app.set("view engine", "pug"); // tell Express to use Pug

   app.set("views", "views"); // "views" folder is default

3. Pug Template Files:

   - Stored in the "views" folder

   - Cannot paste raw HTML (must use Pug’s indentation syntax)

   - Example starter template:

     doctype html

     html(lang="en")

     head

     meta(charset="UTF-8")

     meta(name="viewport", content="width=device-width, initial-scale=1.0")

     title Document

     body


   - Indentation is important (2 spaces is common)

   - Pug compiler will convert this into normal HTML automatically

4. Rendering Templates:
   - Instead of res.sendFile() for static HTML

   - Use res.render() for templates

   - Example in router:

     // GET /courses → show list of courses

     router.get("/", (req, res) => {

     // res.sendFile(path.join(rootDir, "views", "courses.html"));

     res.render("courses"); // looks for courses.pug inside "views"

     });

===========================================================

Summary:

- app.set("view engine", "pug") enables Pug templates

- app.set("views", "views") tells Express where to find them

- # Use res.render("filename") to render .pug files

  \*/

# /\*

# Sharing Data Between Routes in Express.js

1. Defining Data in courses.js 

   - Created a shared array to store course names:

     const courses = [];

   - Exported both the router and the array:

     exports.router = router;

     exports.courses = courses;

   This makes the same "courses" array accessible in other files.

---

2. Importing in app.js

   - Since courses.js exports multiple things, we import the object:

     const coursesRoutes = require("./routes/courses");

   - Use the router for handling /courses/\*

     app.use("/courses", coursesRoutes.router);

---

3. Adding Course Data

   - In courses.js, POST handler adds new courses:

     router.post("/add", (req, res) => {

     courses.push({title:req.body.courseName});

     res.redirect("/courses");

     });

   - Redirect ensures the user sees the updated course list.

---

4. Reading the Same Data in users.js

   - Import the entire export object from courses.js:

     const bookData = require("./courses");

   - Access the shared array:

     console.log("from user page", bookData.courses);

   - This allows "users.js" routes to see the same updated courses.

---

Key Idea:

- By exporting the array itself (not just its values),

  all routes share the same reference.

- Any changes in courses.js (push, update, etc.)

  are visible in users.js (or anywhere else it is imported).

  ===========================================================

  \*/


  pug implementation

  /**
 * ============================================================================

 * File: courses.js

 * Purpose:

 * - Handle course-related routes in the Express application.

 * - Maintain an in-memory array of courses.

 *

 * Features:

 * 1. courses array:

 *    - Stores course objects { title, description }.

 *    - Shared across modules via export.

 *

 * 2. POST /courses/add:

 *    - Receives course data from form submission (req.body.courseName).

 *    - Pushes new course object into courses array.

 *    - Redirects to /courses to display the updated list.

 *

 * Usage:

 * - Export both router and courses array:

 *      module.exports = { router, courses };

 *

 * Notes:

 * - This is an in-memory implementation; data resets on server restart.

 * ============================================================================

 */


/**

 * ============================================================================

 * File: users.js

 * Purpose:

 * - Display a list of courses to the user using Pug template engine.

 *

 * Features:

 * 1. Import courses array from courses.js:

 *    const bookData = require("./courses");

 *

 * 2. GET /users:

 *    - Fetches the current courses from the imported array.

 *    - Passes courses as title and author name as author to the Pug template.

 *    - Renders 'users' view (users.pug) dynamically with the data.

 *

 * Usage in Template:

 * - Access course list as title (array of objects).

 * - Access author name as author (string).

 *

 * Example Data Passed to Template:

 * {

 *   title: [ { title: "Course 1", description: "..." }, ... ],

 *   author: "Ramji"

 * }

 *

 * ============================================================================

 */


/**

 * ============================================================================

 * File: users.pug

 * Purpose:

 * - Render a dynamic list of courses passed from Express route (users.js).

 *

 * Template Variables:

 * 1. title → Array of course objects: [{ title, description }, ...]

 * 2. author → String containing author name.

 *

 * Features:

 * - Conditional rendering:

 *    if courses exist, loop through them using:

 *      each course, index in title

 *        li #{index + 1}. #{course.title} - #{course.description}

 *    else display "No courses available."

 *

 * - Navigation links:

 *    Home | Courses | Add Course | Users

 *

 * Writing Pug:

 * - Use indentation instead of closing tags.

 * - Use #{variable} to inject dynamic content.

 * - Use if / else for conditional rendering.

 * - Use each for looping arrays.

 *

 * Example Output:

 * Courses List

 * 1. Course 1 - Description

 * 2. Course 2 - Description

 * Author: Ramji

 *

 * ============================================================================

 */