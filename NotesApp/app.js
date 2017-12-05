console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];

switch (command) {
    case 'add':
        console.log('Adding new note');
        break;
    case 'list':
        console.log('Listing all notes');
        break;
    case 'read':
        console.log('Reading note');
        break;
    case 'remove':
        console.log('Removing note');
        break;
    default:
        console.log('Command not recognized');
        break;
}