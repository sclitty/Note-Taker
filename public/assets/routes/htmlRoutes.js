const path = require("path");
const router = require("express").Router();


// Routing to /notes by sending to notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Routing not specified send to home page -- index.html
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// ------------------------------------------------------------------------- //

module.exports = router; 