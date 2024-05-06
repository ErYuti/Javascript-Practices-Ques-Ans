async function foo(){
    return 'hello world'
}
const result = foo();
console.log(result);
// output
//promise 
// In the async function when you don't used await than its return promise

// ------------------------------------------------------

//want promise value
// async function foo(){
//     return'hello world'
// }
async function re(a){
    const resul = await a;
    console.log(resul);//pause the code still code result resolve block the other code bcz using other thread
    console.log('hey');
}
re('hello');

