// const arr = ['apple', 'banana', 'cherry'];
// let a = arr.indexOf('banana');  // 1
// let b = arr.indexOf('orange');  // -1

// console.log(a)
// console.log(b)

// Shallow copy vs deep copy

// const obj ={a:1,b:2,c:{d:2}}
// const shallowCopy = Object.assign({},obj)
// const deepCopy = JSON.parse(JSON.stringify(obj))
// console.log(shallowCopy)
// shallowCopy.c.d = 5
// console.log(obj.c.d)
// console.log(obj)
// console.log(shallowCopy.c.d)

// console.log("Deep copy",deepCopy);

const string = "A Quick brown fox jump over a lazy dog"
const arr = string.toLowerCase().split(" ")
const count ={}
const result=arr.map((item, i,a)=>{  //currentValue, index, array
    // count[item] = (count[item] || 0) + 1;
    // console.log(count[item]);
    return item
})
// console.log(result);

// console.log(arr);
// console.log(count);

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];
  
  const updatedProducts = products.map(product => ({
    ...product,  
    price: product.price * 1.2  
  }));
  
//   console.log(updatedProducts);

const ids = [1, 2, 3];
const names = ['John', 'Jane', 'Alice'];

const users = ids.map((id, index) => ({
  id: id,
  name: names[index]
}));

// console.log(users);
  

const arrr = [1, 2, 3, 4, 5];

// Extract elements from index 1 to 3 (index 3 is not included)
const slicedArr = arrr.slice(1, 3);
// console.log(slicedArr);  

// Original array is not modified
// console.log(arrr);  


const tosplice = [3,6,9,12,15]
const splicedArray = tosplice.splice(1,9)
// console.log(splicedArray);
// console.log(tosplice);

const numbers = [10, 500, 100, 0, 25];

const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);

// console.log(max); 


function twoSum(nums, target) { //no that efficient

  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]==target){

        return [i,j]

      }
    }
  }
  return []

}

// console.log(twoSum([2, 7, 11, 15], 13)); 

const something = [1,2,3,5,8,8,8]

const res = something.every(num=>num>0)
console.log(res);


