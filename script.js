var fruits = [];

fruits.push("apple");
fruits.push("pear");
console.log(fruits);

console.log("--------------------------------")

fruits.pop()
console.log(fruits)

console.log("------------------------------")

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
arrayBuilder("apple", "pear", "plum");

var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr)

