/**
 * This application will read form a file and then create a server and 
 * post it to the website (Client). 
 */


var http = require('http'); 
var fs = require('fs'); 

var server = http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type' : 'text/plain'}); 
    var myRreadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 
    myRreadStream.pipe(res); 
});

server.listen(3000, '127.0.0.1'); 

console.log('yo dawgs, now listening to port 3000'); 
