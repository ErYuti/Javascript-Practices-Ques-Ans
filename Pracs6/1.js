// Guess the outputs of the following codes:

//code1
function func1(){
  setTimeout(()=>{
    console.log(x);//2 
    console.log(y);//12
  },3000);

  var x = 2; //x=2
  let y = 12; //y=12
}
func1();//calling
// Code 1 - Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.

// ------------------------------------------

//code2
function func2(){
    for(i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i);
          },2000);
    }
  }
  func2();//3 times 4
//   Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.

// -------------------------------------------------

//code3
(function(){
    setTimeout(()=>{
      console.log(1);
    },2000);
    console.log(2);
    setTimeout(()=>{
        console.log(3);
      },0);
    console.log(4);

  })();

//2
//4
//3
//
// even though the second timeout fun has a waiting time ofzero seconds. the js engine always evalutes the settimeoutfun using the web api's therefore, the complete function executes before the setTimeout function can execute