const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evens = numbers.filter(num => num % 2 === 0);

// Filter odd numbers
const odds = numbers.filter(num => num % 2 !== 0);

// console.log("Even Numbers:", evens);
// console.log("Odd Numbers:", odds);  
var x=2
var y=3
x=y
x=x
// console.log(x);
// console.log(y);

// console.log(numbers);
const newarr = [...numbers]
// console.log(newarr);

numbers.pop()
// console.log(newarr);

const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
    { price: 8, quantity: 3 },
  ];
  

  const itemTotals = cart.map(item => item.price * item.quantity);
  const total = itemTotals.reduce((sum,curr)=>sum+curr,0)
// console.log(itemTotals);
// console.log(Array(9).fill(null));


let input = "abc";

function isPalindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    console.log(i);
    
    if (input[i] !== input[input.length - 1 - i]) {
      return "Not a palindrome";
    }
    return "It's a palindrome";
  }
}

console.log(isPalindrome(input));
