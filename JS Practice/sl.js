const arr = [10,2,9,66,5,11,2220]

let largest = arr[0]
let secondLargest = -Infinity

for (num of arr){
    if(num>largest){
        secondLargest= largest
        largest = num
    }
    if(num<largest && num>secondLargest){
        secondLargest=num
    }
    // if (secondLargest === -Infinity) {
    //     console.log("No second largest element exists");
         
    // }
    
}
// console.log(largest);
// console.log(secondLargest);


// const input = "Was it.. a cat ?i saw";
const input = "A man, a plan, a canal—Panama,"
const regex = /[A-z]/g
const refinput = input?.toLowerCase().split(" ").join("").match(regex)
// console.log(refinput.match(regex));


function isPalindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    // console.log(i);
    
    if (input[i] !== input[input.length - 1 - i]) {
      return "Not a palindrome";
    }
}
return "It's a palindrome";
}
// console.log(isPalindrome(refinput));



let number = 4
let n0=0, n1=1,nextNumber;

for (let index = 0; index < number.length; index++) {
    console.log(n1);
    nextNumber=n0+n1
    n0=n1
    n1=nextNumber
    
}
// take input from the user
const numberz = 9
let n1z = 0, n2z = 1, nextTermz;

console.log('Fibonacci Series:');

for (let i = 1; i <= numberz; i++) {
    console.log(n1z);
    nextTermz = n1z + n2z;
    n1z = n2z;
    n2z = nextTermz;
}