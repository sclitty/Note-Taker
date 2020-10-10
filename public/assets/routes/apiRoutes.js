// const router = require("express").Router();
// const stored = require("../db/store.js");

// // Receiving Notes
// router.get("/notes", function(req, res) {
//     stored
//     .getNotes()
//     .then(function(notes) {
//         res.json(notes);
//     })
//     .catch(function(err) {
//         res.status(500).json(err)
//     });
// });

// // Posting Notes
// router.post("/notes", function(req, res) {
//     stored
//     .addNote(req.body)
//     .then(function(notes) {
//         res.json(notes);
//     })
//     .catch(function(err) {
//         res.status(500).json(err);
//     });
// });

// // Deleting notes
// router.delete("/notes:id", function(req, res) {
//     stored
//     .removeNote(req.params.id)
//     .then(function() {
//         res.json({ok: true });
//     })
//     .catch(function(err) {
//         res.status(500).json(err);
//     });
// });

// module.exports = router;
