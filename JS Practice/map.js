const arr = [1,10,20,5,9,-6,-20]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const specialArr = [1, 2, NaN, 4,null,undefined];




let map =arr.forEach((value,index,array)=>{
    return value
})
// console.log(map);
// console.log(arr.join(","))
// console.log(arr.filter(num=>num>20));
// console.log(arr.indexOf(20));
// console.log(arr.indexOf("Banana"));
// console.log(fruits.includes("a"));
// console.log(arr.includes(5));

// Using Array.includes()
console.log(specialArr.includes(undefined)); // true

// Using Array.indexOf()
console.log(specialArr.indexOf(undefined));  // -1

console.log(Number.NaN);
console.log(typeof(null));
const person = { name: "John", age: 30 };
console.log(Object.keys(person));
console.log(Object.values(person));





