//5.make this work:
//duplicate ([1,2,3,4,5]); //[1,2,3,4,5,1,2,3,4,5];


function duplicateArray (array){
    console.log(array.concat(array));
}
duplicateArray([1,2,3]);