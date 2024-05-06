//Code 2
  
  const a = function(){
    console.log(this);//window object -global
  
    const b = {
      func1: function(){
      console.log(this);//window object -global

      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);//object
      }
    }
  
    b.func1();//window object -global
    c.func2();//object func1
  }
  
  a();//window object -global

  //ouput
//   Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//{func1: ƒ}
//   Window {window: Window, self: Window, document: document, name: '', location: Location, …}