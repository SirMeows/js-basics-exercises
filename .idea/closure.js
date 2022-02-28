//1) Implement and test the Closure Counter Example from the Slides
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

/*2) Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and return an object with the following methods:
setAge , setName , getInfo (should return a string like Peter, 45)
 */