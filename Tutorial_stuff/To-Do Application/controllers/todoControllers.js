var bodyParser = require('body-parser'); 
var data= [{item: 'Get milk'}, {item: 'Finish Coding project'}, 
{item: 'Turn in the paper'}]; 
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose'); 

//Connect to the mongodb
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds255787.mlab.com:55787/testing_todo1'); 

//Creating a chema for the db
var todoSchema = new mongoose.Schema({
    item: String
}); 

var Todo = mongoose.model('Todo', todoSchema); 

var item1 = Todo({item: 'get flowers'}).save(function(err){
    if(err) throw err; 
    console.log('item saved');
}); 


module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data}); 
    
    });

    app.post('/todo', urlencodedParser, function(req, res){
          data.push(req.body); 
          res.json(data); 

    });

    app.delete('/todo:item', function(req, res) {
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-' !== req.params.item); 
        }); 
        res.json(data);
    });
};