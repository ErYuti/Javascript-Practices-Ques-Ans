foo() //calling foo
var foo =20 
function foo(){
    console.log('calling foo');
}
console.log(foo);//20 
foo() //foo is not a function same variable is used 

// output
// calling 
//20
// foo Uncaught TypeError: foo is not a function