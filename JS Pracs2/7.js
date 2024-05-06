//7.write a js function that checks whaether a passed strings is palindrome ornot

function stringsPalindrome(strng){
    var reversed = strng.split("").reverse().join("");
    if(reversed === strng){
        return true;
    }else{
        return false;
    }
}
console.log(stringsPalindrome("loop"));
console.log(stringsPalindrome("pop"));
console.log(stringsPalindrome("susuu"));
console.log(stringsPalindrome("suus"));
