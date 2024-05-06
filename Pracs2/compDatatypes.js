let a=3; //a=3
let b= new Number(3); //3
console.log(b);//number{3} object
let c=3; //c =3

console.log(a == b); //true 3=3
console.log(a === b); //false - typeof num = obj
console.log(a = c); //3
console.log(a === c); //true
console.log(b === c); //false - typeof num = obj