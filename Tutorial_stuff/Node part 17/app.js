/**
 * Instead of sending a textfile to the website we are sending a
 * html file to the browser.
 */

var http = require('http'); 
var fs = require('fs'); 

var server = http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type' : 'text/html'}); 
    var myRreadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); 
    myRreadStream.pipe(res); 
});

server.listen(3000, '127.0.0.1'); 

console.log('yo dawgs, now listening to port 3000'); 

