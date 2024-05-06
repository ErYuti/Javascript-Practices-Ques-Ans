const array = [1,2,3];
array[4]=5;
console.log(array.length);
console.log(array);
console.log(array[3]);
console.log(array[30]);
console.log(array.indexOf(30)); //when index is not found that print -1
//output
// 5
// [1, 2, 3, empty, 5]
//undefined
//undefined
//-1
