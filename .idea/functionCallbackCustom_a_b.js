let names = ["stephen", "rottis", "Wouter", "Lee", "Loo", "Optimus"];

function filter(array, predicate) {
    const result = []
    for (const index in array) {
        const item = array[index]
        const should_include = predicate(item)
        if (should_include) { result.push(item) }
    }
    return result
}

function map(array, predicate) {
    const result = [];
    for (const index in array) {
        const item = array[index];
        const modified = predicate(item);
        result.push(modified);
    }
    return result;
}

function removeFirst(str) {
    return str.slice(1);
}

function boolTrue() {
    return true;
}

function boolFalse() {
    return false;
}

function smallerThan4(name) {
    return name.length < 4;
}

const c2 = boolFalse;
const c = boolTrue;

console.log(filter(names, boolTrue));
console.log(filter(names, boolFalse));
console.log(filter(names,smallerThan4));
console.log(map(names, removeFirst))

/*
The next two functions should work exactly as the arrays built in methods, except that you will need to pass the array to be used, into the functions.
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback
Test the method with the same array and callback as in the example with the original filter method.
b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
 */