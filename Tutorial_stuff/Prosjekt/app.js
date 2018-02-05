var events = require('events');

var util = require('util');

var Person = function (name){
    this.name = name;
};


util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var ola = new Person('ola');
var ryu = new Person('ryu');

var people = [james, ola, ryu];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
james.emit('speak', 'theghegsdsadsa');



/*
console.log(stuff.counter(['hey0', 'test0']));
console.log(stuff.adder(1,5));
console.log(stuff.adder(stuff.pi, 5));*/
