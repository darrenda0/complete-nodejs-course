console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};
//module.exports.age = 25;

// function () = '=>'

//  module.exports.addNote = () =>{
//      console.log('addNote');
//      return 'New note';
//  }

// module.exports.addNum = (a, b) => {
//     return a + b;
// };

//Section 3, Lecture 13
//addNote: addNote = addNote



var addNote = (title, body) => {
//    console.log('Adding note', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('Removing note', title);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}