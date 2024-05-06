// 1. write a function that return the reverse of string

function convertToReverseString(string){
    return string.split("").reverse().join("");
}
let result = convertToReverseString(("hello world"))
console.log(result)



// 2. write a function that returns the longest word in the sentence


function longWord(str){
    const words = str.split(" ");
    let longW = "";

    for(let word of words){
        if(word.length > longW.length){
            longW = word;
        }
    }
    return longW;
}
var out = longWord(('i am a yuti meher i love coding'))
console.log(out)

// 3. write a function that checks whether a given string is a pailndrome or not

function isPailndrome (str){
    const r = str.split("").reverse().join("");
    return str === r ;
}
console.log(isPailndrome('ror'))


// 4. 