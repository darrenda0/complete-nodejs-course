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
    return fetchNotes();    
}

var getNote = (title) => {
    // console.log('Getting note', title);
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title ===title); 
    return filterNotes[0];
}

var removeNote = (title) => {
    // console.log('Removing note', title);
    var notes = fetchNotes();   //fetch notes
    //filter notes, removing the one wiht title of argument
    var filterNotes = notes.filter((note) => note.title !==title); 
    saveNotes(filterNotes); //save new notes array

    return notes.length !== filterNotes.length;
}
var logNote = (note) => {
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}