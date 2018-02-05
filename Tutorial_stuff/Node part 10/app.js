var fs = require('fs'); 
/**
 *fs.mkdir('Stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
       fs.writeFilesSync('./stuff/writeme.txt', data);      
    });

});  
 */

 
 //Sletter hele mappen. 
// fs.rmdir('stuff'); 

//Sletter filen inn i mappen også sletter den mappen
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});



