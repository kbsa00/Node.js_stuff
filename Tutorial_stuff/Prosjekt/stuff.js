
function counter (arr) {
    return 'There are ' + arr.length + ' elements in the array';
};



var adder = function (a,b) {
    return `the sum of the 2 number is ${a*b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
