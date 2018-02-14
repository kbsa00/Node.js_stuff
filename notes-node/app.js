console.log("Starting app");

const fs = require('fs');
const os = require('os'); 
const notes = require('./notes');
const yargs = require('yargs'); 

const argv = yargs.argv;

var command = argv._[0]; 

console.log('Command: ', command);


switch(command){
   case 'add': 
   console.log('Adding new note');
   var currentNote = notes.addNote(argv.title, argv.body);
   if(currentNote === undefined){
       console.log('Note is already defined');
   }
   else{
      
      console.log('\nNote is now added');
      console.log(`\nTitle: ${currentNote.title}`);
      console.log(`Body ${currentNote.body}`);
   }
   break;
   case 'list':
   notes.getAll(argv.title); 
   break;
   case 'remove':
   notes.removeNote(argv.title); 
   break; 
   case 'read': 
   notes.getNote(argv.title); 
   break; 
   default: console.log('Command not recognized');
}