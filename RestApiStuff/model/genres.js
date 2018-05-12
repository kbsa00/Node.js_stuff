var mongoose = require('mongoose'); 


//Simple GenreSchema of how it looks like in the DB. 

var genreSchema = mongoose.Schema({
    
    name:{
        type: String, 
        required: true
    }, 
    create_date:{
        type: Date, 
        default: Date.now
    }
}); 


var Genre = mongoose.model('Genre', genreSchema); 

//Getting genres from the db using mongoose functions.
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit); 
}

//Adding Genres in the db using mongoose functions.
module.exports.addGenres = function(genre,callback){
    Genre.create(genre, callback); 
};

//Updating Genre in the db using mongoose functions.
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id}; 
    var update = {
        name: genre.name, 
    }
    Genre.findOneAndUpdate(query, update, options, callback); 
};

//Deleting a genre from the db, using mongoose functions. 
module.exports.deleteGenre = function(id, callback){
    var query = {_id: id}; 
    Genre.remove(query, callback); 
};  
