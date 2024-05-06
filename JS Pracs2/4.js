//4.how would you check if a number is an integer??

// var num =12;
// console.log(typeof num);//number
// console.log(NaN === num);//false

//1
console.log(Number.isInteger(1));
console.log(Number.isInteger(1.5));


//2
var a = 12.1;

if(a % 1 === 0){
    console.log('integer');
}else {
    console.log('not!');
}
