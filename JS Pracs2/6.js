//6. write a js function that reverse a number

function reverseNum (num){
    return Number(num.toString().split("").reverse().join(""));
}
var result = reverseNum(12);
console.log(result);