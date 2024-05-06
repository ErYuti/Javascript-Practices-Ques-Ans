// global 
console.log(this);

// global context= the function is a property of the global object
function doSomething() {
    console.log(this);
  }
     
  doSomething();

//   In the above code, at the time of invocation, the getName function is a property of the object obj , therefore, this keyword will refer to the object obj, and hence the output will be “vivek”.
  var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();

// The silly way to understand the “this” keyword is, whenever the function is invoked, check the object before the dot. The value of this . keyword will always be the object before the dot.
var getName = obj.getName;
       
var obj2 = {name:"akshay", getName };
obj2.getName();

// So, the ‘this’ keyword has different values according to or depending upon where it is used.

// If we use it in a method then, this refers to the owner object.
// If it is alone, then this refers to the Global object.
// If it is used in a function, then this refers to the global object
// If it is used in a function, in strict mode, then this remains undefined.
// In an event, this refers to that respective element that receives the event.