var express = require('express'); 
var app = express();
var todoController = require('./controllers/todoControllers');

//Set up template engine
app.set('view engine', 'ejs'); 

//Static files
app.use(express.static('./public/assets'));



//fire controllers
todoController(app);


app.listen(3000); 
console.log('You are listening to port 3000');

