console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let argv = yargs.argv;
let command = argv._[0];

let logNote = (note) => {
    if (note) {
        console.log('====================================');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log('====================================');
    } else {
        console.log("Note not found")
    }
};

switch (command) {
    case 'add':
        let added = notes.addNote(argv.title, argv.body);        
        added ? console.log('Note created successfully') : console.log('Note title already exists');
        break;
    case 'list':
        let allNotes = notes.getAll();
        allNotes.forEach(note => logNote(note));
        break;
    case 'read':
        let note = notes.getNote(argv.title);
        logNote(note);
        break;
    case 'remove':
        let removed = notes.removeNote(argv.title);
        removed ? console.log('Note was removed') : console.log('Note not found');
        break;
    default:
        console.log('Command not recognized');
        break;
}