/*
1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
 */

const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//adfeb