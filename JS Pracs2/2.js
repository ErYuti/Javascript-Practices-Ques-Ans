//2.how to check if an array is an object or not

//>>>we cant used typeof method to check the array bcz is give object
console.log(Array.isArray([]));//true

function checkArray(elem){
    console.log(Array.isArray(elem));
}
checkArray({});
checkArray([]);