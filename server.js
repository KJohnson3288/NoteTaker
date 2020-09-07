//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const noteData = require("./db/db.json");
const uuidv4 = require("uuidv4")


//Creating express server
var app = express();
var noteId = uuidv4;

//Sets port
var PORT = process.env.PORT || 3000;

//Set up express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//Routes
//HTML Routes


app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(_dirname, "/public/notes.html"));
});


//API Routes
//GET request for all Notes
app.get("/api/notes/", (req, res) => {
    res.json(noteData);
});

//POST
app.post("/api/notes/", (req, res) => {
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id: noteId
    };

    noteData.push(newNote);
    res.json(newNote);

});

//DELETE
app.delete("/api/notes/:id", function(req, res){
        
    let id = req.params.id.toString();

    for (i=0; i < noteData.length; i++){
       
        if (noteData[i].id == id){
            
            res.send(noteData[i]);

            noteData.splice(i,1);
        }
    }
});

//Listner for PORT
app.listen(PORT, () => {
    console.log("Server listening on: http//localhost:" + PORT);
  });
