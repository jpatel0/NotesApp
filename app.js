
const fs = require('fs');
const yargs = require('yargs');
const notes=require('./notes.js');

const titleOptions = {
	describe: "Title of note",
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: "Body of note",
	demand: true,
	alias: 'b'
};

var argv=yargs.command('add','Add a Note',{
				title: titleOptions,
				body: bodyOptions
			})
			.command('remove','Remove a note',{
				title: titleOptions
			})
			.command('read','Read a Note',{
				title: titleOptions
			})
			.command('list','List all notes')
			.help()
			.argv;

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
		var allNotes=notes.listNotes();
		if (allNotes.length>0) {

			allNotes.forEach((note) => {
				console.log('Title:',note.title);
				console.log('Body:',note.body);
			});
		}
		break;

	default:
		console.log('invalid input argv');
}
