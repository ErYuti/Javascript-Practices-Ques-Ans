//8.write a js function that return a passed string with letters in alphabeticals order

function alphabeticalsOrder(strng){
    return strng.split("").sort().join("");
}
console.log(alphabeticalsOrder("yuti"));
console.log(alphabeticalsOrder("abcd"));
console.log(alphabeticalsOrder("dcba"));
console.log(alphabeticalsOrder("meher"));