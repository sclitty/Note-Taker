// const fs = require("fs");
// const util = require("util");

// const uuidv1 = require('uuidv1'); 

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Stored {
//     read() {
//         return readFileAsync("db/db.json", "utf8");
//     }

//     write () {
//         return writeFileAsync("db/db.json", JSON.stringify(note));
//     }

//     getNotes() {
//         return this.read().then(function(notes) {
//             let parsedNotes;

//             try {
//                 parsedNotes = [].concat(JSON.parse(notes))
//             } catch(err) {
//                 parsedNotes = [];
//             }

//             return parsedNotes;
//         })
//     }

//     addNote(note) {
//         const { title, text } = note;

//         if (!title || !text) {
//             throw new Error("Note cannot be blank");
//         }

//         const newNote = { title, text, id: uuidv1()};

//         return this.getNotes()
//             .then(function(notes){
//                 notes.filter(function(note){
//                     note.id !== id
//                 })
//             })
//             .then(function(filteredNotes) {
//                 this.write(filteredNotes);
//             });
//     }
// }

// module.exports = new Stored();