// create  object with four different properties
const toy = {color:"black", size:"small", age:38, wellLoved:true}
// Use a for-in loop to iterate over propeties in the obj

function print() {
    console.log("***************")
    for(prop in toy) {
        console.log(prop, toy[prop]); // property name + val
    }
}

print();

delete toy.size
print();

toy.price = 100000000000;
print();
