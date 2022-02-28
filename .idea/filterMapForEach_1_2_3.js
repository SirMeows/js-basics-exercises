let names = ["stephen", "rottis", "Wouter", "Lee", "Loo", "Optimus"]

const newArr = names.map(s => s.toUpperCase());
console.log(newArr);

const reducedArr = names.filter(s => s.length <= 3);
console.log(reducedArr);

const oneStr = "<ul>" + names.map(s => "<li>" + s + "</li>").join("") + "<ul>";
console.log(oneStr);