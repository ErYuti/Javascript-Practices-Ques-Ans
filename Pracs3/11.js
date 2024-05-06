//so every time you create the constructor function  a new this object is created
//implicit statement that saying  this object is return so output is objects
function abc(){
    // this()
    console.log('hii');
    // return this()

}
const value = new abc();
console.log(value);

//output
// hii
// abc {}
// [[Prototype]]: Object