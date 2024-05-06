// guess the outputs of the following code:

// Code 1
  let hero = {
    powerLevel: 99,//powerlevel 99
    getPower(){
      return this.powerLevel;//pointed the 99
    }
  }
  
  let getPower = hero.getPower;
  console.log(getPower);
//   function (){
//     return this.powerLevel;//pointed the 99
//   }
  let hero2 = {powerLevel:42};//powerlevel 42
  console.log(getPower());//undefined
  console.log(getPower.apply(hero2))// 42

//   Output in the following order:

//   undefined
//   42
//   Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:
  
//   window.getPower() = getPower()