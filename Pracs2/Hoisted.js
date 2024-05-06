//1
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;


//2
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ 
  console.log(" Hello world! ");
} 

//3
// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x);
    var x;
  } 

//4
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;