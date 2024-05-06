var array = [123, "yuti", 455, "meher", 234];
var sum = 0;

array.forEach((ele)=>{
    if(typeof ele === 'number'){
        sum = sum+ele;
    }
})
console.log(sum);
