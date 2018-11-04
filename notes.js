
const fs = require('fs');

var fetchNotes = () => {
  try {
    var originalDataString=fs.readFileSync("notesData.json");
    return JSON.parse(originalDataString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notesArray) => {
  var noteStringObject=JSON.stringify(notesArray);
  fs.writeFileSync("notesData.json",noteStringObject);
};



function addNote(title,body){
  console.log('inside addNote function',`${title}, ${body}`);
  var notesArray=[];
  var note={
    title,
    body
  };
  notesArray=fetchNotes();

  var duplicateNotes = notesArray.filter((note) => note.title === title);

  if (duplicateNotes.length==0) {
    notesArray.push(note);
    saveNotes(notesArray);
    return note;
  }

}

var editNote = (title) => {
  console.log('editNote:',title);
};

var deleteNote = (title) => {
    var getNotesArray = fetchNotes();
    var filteredNotes = getNotesArray.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return filteredNotes.length != getNotesArray.length;
};

var listNotes = () => {
  console.log('List of notes:');
}

module.exports={
  addNote,
  editNote,
  deleteNote,
  listNotes
};
