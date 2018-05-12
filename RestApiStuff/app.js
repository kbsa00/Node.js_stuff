var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose'); 

app.use(bodyParser.json()); 


Genre = require('./model/genres')
Book = require('./model/book'); 
//Connecting to mongoose 

//mongoose connection
mongoose.connect('mongodb://localhost/bookstore'); 
var db = mongoose.connection; 


app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres'); 
}); 


//Getting all genres from the db.
app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err; 
        }
        res.json(genres); 
    }); 
}); 

//Getting all books from the db
app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err) throw err; 
        res.json(books);        
    }); 

}); 


//Getting a specific book from the db. 
app.get('/api/books/:_id', function(req, res){
    
    Book.getBooksById(req.params._id, function(err, book){
    if(err) throw err; 
    
    res.json(book); 
    });
}); 

//Adding a genre to the DB. 
app.post('/api/genres', function(req, res){
    var genre = req.body; 
    Genre.addGenres(genre, function(err, callback){
        if(err) throw err; 
        res.json(genre); 
    }); 

});

//Adding a book to the DB
app.post('/api/books', function(req, res){
    var book = req.body; 
    Book.addBook(book, function(err, callback){
        if(err) throw err; 
        res.json(book); 
    });
});

//Updating a genre by their id. 
app.put('/api/genres/:_id', function(req, res){
    var id = req.params._id; 
    var genre = req.body; 

    Genre.updateGenre(id, genre,{}, function(err, callback){
        if(err) throw err; 
        res.json(genre); 
    }); 

}); 

//Updating a book by their id.
app.put('/api/books/:_id', function(req, res){
    var id = req.params._id; 
    var book = req.body; 

    Book.updateBook(id, book,{}, function(err, callback){
        if(err) throw err;
        res.json(book);
    });

});

//Deleting a genre by their id
app.delete('/api/genres/:_id',  function(req, res){
    var id = req.params._id;  
    Genre.deleteGenre(id, function(err, genre){
        if(err) throw err;
        res.json(genre); 
    }); 
}); 

//Deleting a book by their id.
app.delete('/api/books/:_id', function(req, res){
    var id = req.params._id;
    Book.removeBook(id, function(err, book){
        if(err) throw err; 
        res.json(book); 
    });

});

//listening on port 3000
app.listen(3000); 

//simple check to see if it is running. 
console.log('Running on port 3000'); 