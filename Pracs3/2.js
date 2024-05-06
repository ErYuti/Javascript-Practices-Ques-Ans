{
    let a = 1
    const b = 2
    var c =3
    console.log(a); //a=1
    console.log(b); //b=2
    console.log(c); //c=3
}
console.log(c); // c=3
console.log(a); //error= not defined
console.log(b); 
console.log(c); 

//output=>
// 1
// 2
// 3
// 3
// Uncaught ReferenceError: a is not defined