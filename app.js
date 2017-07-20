console.log('Starting app.js');

// 3rd party modules:
const fs = require('fs');
// const os = require('os');
const _ = require('lodash');  
const yargs = require('yargs');

//Moduels I've created:
const notes = require('./notes.js');

//Previous assignments:
//var res = notes.addNote();
// var results = notes.addNum(); 
//console.log(res);
// var user = os.userInfo();
// //console.log(user);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
// console.log ('a + b = ', notes.addNum(5, 5) );

// console.log(_.isString(true));
// console.log(_.isString('Darren'));

// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process', process.argv); //argv is like an arguments array
console.log('Yargs', argv);

//Lecture 13 assignment
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
    notes.getAll();
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