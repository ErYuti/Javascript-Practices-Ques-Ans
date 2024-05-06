let a = [20]; //a = 20 
let b = [20]; // b =20
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);

//true 
//true

//a array having 20 at 0 index and similar taking b array 20 at 0 index
//but both are different array means their address are different
//when you comapre a array 0 index to b array 0 index with same value then its give true with different memory location 
// normal comapre also and sticky comapre also its change value not adress when array is empty n