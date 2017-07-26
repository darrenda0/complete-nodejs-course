
// 3rd party modules:
const fs = require('fs');
const _ = require('lodash');  
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    //if note did get printed successfully:
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title alraedy taken');
    }
} else if(command === 'list') {
    //console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
    // console.log('Reading note');
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
       notes.logNote(note);
    } else {
        console.log('Note cannot be read');
    }
} else if (command === 'remove') {
    // console.log ('Removing note')
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Note was removed' : 'Note not found';
    console.log(message);
    
}else {
    console.log('Command not recognized');
}