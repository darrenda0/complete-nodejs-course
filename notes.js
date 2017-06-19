console.log('Starting notes.js');

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
    console.log('Adding note', title, body);
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