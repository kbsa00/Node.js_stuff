var mongoos = require('mongoose'); 


var booksSchema = mongoos.Schema({
    author:{
        type: String, 
        required: true
    },
    title:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    publisher:{
        type: String, 
        required: true
    },
    pages:{
        type: Number, 
        required: true, 
    },
    created_date:{ 
        type: Date, 
        default: Date.now
    }, 
    image:{
       type: String 
    },
    buy_url:{
        type: String
    }
}); 

var Books = mongoos.model('Books', booksSchema); 

//Getting all books with 
module.exports.getBooks = function(callbacks, limit){
    Books.find(callbacks).limit(limit); 
};

//Getting all book by ID
module.exports.getBooksById = function (id, callback) {
    Books.findById(id, callback); 
};

//Adding a book to the DB..
module.exports.addBooks = function(book, callback){
    Books.create(book, callback); 
}; 


//Update a book 
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id}; 
    var update = {
        title: book.title,
        genres: book.genres, 
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages, 
        image: book.image,
        buy_url: book.buy_url
    }
    Books.findOneAndUpdate(query, update, options, callback); 
}

//remove a book from the db function. Using mongoose functions.
module.exports.removeBook = function(id, callback){
    var query = {_id: id}; 
    Books.remove(query, callback);
}