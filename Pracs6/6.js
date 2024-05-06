// Code 3
  
  const b = {
    name:"Vivek",//name:vivek
    f: function(){
      var self = this; //window object
      console.log(this.name);//vivek
      (function(){
        console.log(this.name);
        console.log(self.name);//vivek
      })();
    }
  }
  b.f();

//   Outputs in the following order:

// "Vivek"
// 
// "Vivek" 
// Only in the IIFE inside the function f, this keyword refers to the global/window object