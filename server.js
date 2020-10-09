//Require npm packages express/path/fs
const express = require("express");
const path = require("path");
const fs = require("fs");

// Setting express into application 
const app = express();

// Setting PORT for Heroku with default of 3000
var PORT = process.env.PORT || 3000;

// Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ------------------------------------------------------------------------- //

// Routing to /notes by sending to notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Routing not specified send to home page -- index.html
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// ------------------------------------------------------------------------- //

// Calling API from notes to return saved json data
app.post("/api/notes", function(req, res) {

})




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });