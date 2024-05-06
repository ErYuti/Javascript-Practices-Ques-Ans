//9.write ajs function that accpets a string as a parameters and convert the first letter of each word of the string in upper case

function capitalizerFun (str){
    var allWords = str.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.substring(1);
    })

    return allWords.join(" ");
}
console.log(capitalizerFun("yuti is girl"));
