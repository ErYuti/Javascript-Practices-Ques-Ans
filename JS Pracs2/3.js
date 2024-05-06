//3.how to empty an array in js?? do not reset it to a newarray,
//and do not loop thought to pop each value

var array = [1,2,3,4];
console.log(array.length);


//1 method
// array=[];
// console.log(array);


//2 method
// var emptyArray = array.map((ele)=>{
//     return array.pop(ele);
// })
// console.log(emptyArray);


//3
array.length = 0;
console.log(array);
console.log(array.length);
