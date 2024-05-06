//1.given a string, reverse each word in the sentence

var strg = "my name is yuti naresh meher";
console.log(strg);


var strgToArray = strg.split(" ");
// console.log(strgToArray);


var reverseArray = strgToArray.map((word)=>{
    // console.log(word.split(""));
    // console.log(word.split("").reverse());
    // console.log(word.split("").reverse().join(""));
    return word.split("").reverse().join("");
})
// console.log(reverseArray);


var result = reverseArray.join(" ");
console.log(result);

