//new array that dived of 2
const numbers =[10,20,30,40,50];

const ans = numbers.map((el)=>{
    const result = el/2;
    return result;
})
console.log(ans);

const filters = numbers.filter((el)=>{
    if(el < 30){
        return el
    }
})
console.log(filters);

