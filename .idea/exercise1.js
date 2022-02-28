function add(n1, n2){
    return n1 +n2;
}

const sub = function(n1,n2){
    return n1 - n2
}

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) )     // What will this print?
// // => 3
console.log( add )          // What will it print and what does add represent?
// // => [Function: add] Because add without parentheses is just an object reference, not a function call
console.log( add(1,2,3) ) ; // What will it print
// // => 3, because JS ignores additional variable
console.log( add(1) );	  // What will it print
// // => NaN because second var is not defined
console.log( cb(3,3,add) ); // What will it print
// "Result from the two numbers: "+3+"+"+3+"="6 Because object reference gets inserted into function as is?
console.log( cb(4,3,sub) ); // What will it print
// => "Result from the two numbers: "+4+"+"+3+"="1

console.log(cb(3,3,add())); // What will it print (and what was the problem)
// => return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2); Because function w/o params returns default? In this case string?
// Write this as question for Wed to go it through in class

console.log(cb(3,"hh",add));// What will it print
// => TypeError: callback is not a function - Because cb needs a function as third parameter, and add is just a reference to the function object, that returns it's result