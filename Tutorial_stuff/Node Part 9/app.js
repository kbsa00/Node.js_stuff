var fs = require('fs'); 

fs.readFile('test.txt', 'utf8', function(err, data){
    fs.writeFile('write.txt', data); 

});

