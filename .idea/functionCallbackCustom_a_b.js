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


/*
The next two functions should work exactly as the arrays built in methods, except that you will need to pass the array to be used, into the functions.
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback
Test the method with the same array and callback as in the example with the original filter method.
b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
Test the method with the same array and callback as in the example with the original map method.
 */