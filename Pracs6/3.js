// guess the output of the following code:
var x = 23; //x=23 global variale
(function(){
  var x = 43; //x=43 function scope
  (function random(){
    // var x;
    x++; //x=x+1 is not a number 
    console.log(x); //NaN
    var x = 21; //x=21 in random function scope
  })();
})()
// output is NaN.
// random() 
//  has functional scope since x is declared and 
//  hoisted in the functional scope