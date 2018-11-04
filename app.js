
const fs = require('fs');
const yargs = require('yargs');
const notes=require('./notes.js');

var argv=yargs.argv;
console.log(argv);

switch (argv._[0]) {
	case 'add':
		var addedNote=notes.addNote(argv.title,argv.body);
		if (addedNote) {
			console.log("Note added:\n");
			console.log(`Title: ${addedNote.title} \n Body: ${addedNote.body}`);
		}
		else {
			console.log('Error:','Another note with same title already exists');
		}
		break;

	case 'edit':
		notes.editNote(argv.title);
		break;

	case 'read':
		var readNote = notes.getNote(argv.title);
		if (readNote) {
			console.log('Note found:',`\nTitle: ${readNote.title}\nBody: ${readNote.body}`);
		}else {
			console.log('Note not found');
		}
		break;

	case 'remove':
		var deletedNote=notes.deleteNote(argv.title);
		var message=deletedNote ? 'Note was removed' : 'Cant find the note';
		console.log(message);
		break;

	case 'list':
		notes.listNotes();
		break;

	default:
		console.log('invalid input argv');
}

/*fs.appendFile("nnn.txt","jdj",(err) => {
	if(err)
		console.log("Error",err);
});*/
