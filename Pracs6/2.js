// guess the outputs of the following the outputs of the following code:


// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);//{name:"Akki"}
// Output will be {name: “Akki”}.
// Adding objects as properties of another object should be done carefully.
// Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,
// While setting a property of an object, javascript coerces the parameter into a string.
// Therefore, since y is an object, it will be converted to ‘object Object’.
// Both x[y] and x[z] are referencing the same property
//------------------------------------------------------------


// Code 2:

function runFunc(){
  console.log("1" + 1);//11
  console.log("A" - 1);//NaN
  console.log(2 + "-2" + "2");//2-22
  console.log("Hello" - "World" + 78);//NaN
  console.log("Hello"+ "78");//hello78
}
runFunc();
//------------------------------------------------------------


// Code 3:

let a = 0;
let b = false;
console.log((a == b));//true
console.log((a === b));//false