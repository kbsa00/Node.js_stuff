console.log("Starting Notes.js");

const fs = require('fs'); 


var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('Notes-data.json'); 
        return notes = JSON.parse(noteString);
    } catch (error) {
     return []; 
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('Notes-data.json', JSON.stringify(notes)); 

}; 


var addNote = function(title, body) {
   
    var notes = fetchNotes();  
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => {
      return note.title === title; 
    });  
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note; 
    }
};

var getAll = () => {
    console.log('Getting all notes');
    var allNotes;  
    allNotes = fs.readFileSync('Notes-data.json');
    var notes = JSON.parse(allNotes); 
    console.log(typeof notes);
    console.log(notes.title);
};

var getNote = (title) =>{
    console.log('Getting note name: ', title);
}

var removeNote = (title) => {
    console.log('Removing note name: ', title);
}
module.exports = {
    addNote,
    getAll, 
    getNote, 
    removeNote
}; 