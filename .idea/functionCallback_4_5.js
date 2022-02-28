const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

function mul(n1, n2) {
    return n1 * n2;
}
console.log(cb(3, 3, mul));

function div(n1, n2) {
    return n1 / n2;
}

console.log(cb(10, 5, div));