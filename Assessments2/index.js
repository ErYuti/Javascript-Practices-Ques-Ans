// // Print all even numbers from 0 to 10.
function getAllEvenNum(num){
  const evenArray = []
  for(let i=0; i< num.length; i++){
    let nums = num[i]
    if(nums % 2 === 0){
      // console.log(nums);
      evenArray.push(nums);
    }
  }
  return evenArray;
}
const result = getAllEvenNum([0,1,2,3,4,5,6,7,8,9,10]);
console.log(result);


// --------------------------------------------------------------------------------


// Calculate the sum of numbers within an array.
function sumOfArray(arr) {  
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
  } 
  return sum;  
}
let sums = sumOfArray([1,2,3,4,5]);
console.log(sums);


// --------------------------------------------------------------------------------


// Create a function that reverses an array.

function reverseArray(arr){
  let array = [];
  for (let i = arr.length - 1;  i >= 0; i--) {
    array.push(arr[i]);
}
return array;
}
const resArray = reverseArray([1,2,3,4,5]);
console.log(resArray);

//------------------------------------------------------------------------------------


//Create a function that filters out negative numbers.

function reverseArray(arr){
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(num < 0){
      array.push(num);
    }
}
return array;
}
const filters = reverseArray([2,-78,34,0,67,-90,-9087]);
console.log(filters);

// --------------------------------------------------------------------------------------------

//Sort an array from lowest to highest.

function sortArray(arr){
  const array = [];
  for(let i=0; i< arr.length; i++){
    arr[i].sort();
    array.push(arr)
  }
   return array;
}
const sort = sortArray([2,7,1,4,5,3])
console.log(sort)