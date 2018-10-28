console.log('Hello World');

const fs = require('fs');
const note=require('./notes.js');


note.addNote("tttt","ggg");

fs.appendFile("nnn.txt","jdj",(err) => {
	if(err)
		console.log("Error",err);
});

console.log('fs: ',"dd");
