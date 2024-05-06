//10.write ajs function to get the number of occurrences of each letter in specified string

function occ (strg){
    var occurences = {};
    strg.split("").forEach((element) => {
        if(occurences.hasOwnProperty(element) === false){
            occurences[element] = 1;
        }else{
            occurences[element]++;
        }
    });

    return occurences;
}
console.log(occ("apple"));