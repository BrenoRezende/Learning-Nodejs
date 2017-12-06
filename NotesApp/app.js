console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let argv = yargs.argv;
let command = argv._[0];

switch (command) {
    case 'add':
        let added = notes.addNote(argv.title, argv.body);        
        added? console.log('Note created successfully'): console.log('Note title already exists');
        break;
    case 'list':
        let allNotes = notes.getAll();
        console.log(allNotes);
        break;
    case 'read':
        notes.getNote(argv.title);
        break;
    case 'remove':
        let removed = notes.removeNote(argv.title);
        removed ? console.log('Note was removed') : console.log('Note not found');
        break;
    default:
        console.log('Command not recognized');
        break;
}