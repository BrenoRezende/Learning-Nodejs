const fs = require('fs');

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    } catch (error) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let duplicateNotes = notes.filter(n => n.title === title);

    if(duplicateNotes.length === 0) {
        let note = {
            title,
            body
        };
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);

    return filteredNotes[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(n => n.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}