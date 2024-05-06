const output = [1,2,3]
const output1 = [1,2,3]
console.log(output === output1);
//false

// ----------------------------------------

console.log(2 === 2);
//true

//--------------------------------------------

// results in false even if they have the same data. 
// It is because those are two different object instances, they are referring to two different objects.
// objects are assigned and compared by reference, not by value.

const nme = {name:'yuti'}
const nmd = {name:'yuti'}
console.log(nme === nmd);
//false


// ----------------------------------------

console.log(name);
var name ='yuti'
//empty string - global varible

// ----------------------------------------

console.log(typeof hello);
//undefined

// ----------------------------------------

console.log(hello);
//Uncaught ReferenceError: hello is not defined

// ----------------------------------------

console.log(username);
username='yuti';
//Uncaught ReferenceError: username is not defined

// ----------------------------------------

console.log(a);
a=5;
//output
// Uncaught ReferenceError: a is not defined