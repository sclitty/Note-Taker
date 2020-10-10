//REQUIRE EXPRESS/FS/PATH
const express = require('express');
const fs = require('fs');
const path = require("path");
const uniqid = require("uniqid");


//SETUP EXPRESS
const app = express();
//setting up Heroku with default of
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//ROUTING TO /NOTES
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//handles the api call on notes to return the json data saved on file
app.get('/api/notes', function(req, res) {
    const note = readData();
    res.json(note)
});

//POST NOTES
app.post('/api/notes', function(req, res) {
    let noteJson = readData();
    const newNote = req.body
    let id = uniqid()
    newNote.id = id 
    noteJson.push(newNote)
    writeData(noteJson)
    res.json(noteJson)
});

//DELETE NOTES
app.delete('/api/notes/:id', function(req,res) {
    const noteJson = readData();
    const result = noteJson.filter(note => note.id != req.params.id)
    writeData(result)
    res.json(result)
});

//WRITING TO DB.JSON
const writeData = function(data) {
    const jsonPath = path.join(__dirname, "/db/db.json")
    fs.writeFile(jsonPath, JSON.stringify(data), (err) => {
            if (err) throw err;
        });
};

const readData = function() {
    const jsonPath = path.join(__dirname, "/db/db.json")
    const json = JSON.parse(fs.readFileSync(jsonPath))
    return json
};

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
});
