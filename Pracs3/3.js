function anyName() {
    let a = 1
    const b = 2
    var c = 3
    d=4;
}
anyName();
console.log(d);//global scope
console.log(c);//error bcz function scope
console.log(a);
console.log(b);
//output
//4
// Uncaught ReferenceError: c is not defined
    
