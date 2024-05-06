let c = {greeting:'hello!'};//greeting:'hello!'
let d;//undefined

d=c;//refernce to d
c.greeting = 'hello'; //greeting:'hello'
console.log(d.greeting);//hello 
//not hello! bcz c chnage d also change its take refer to c only
// Returns true since the value of both x and y is the same
// Returns false since the typeof x is "number" and typeof y is "string"