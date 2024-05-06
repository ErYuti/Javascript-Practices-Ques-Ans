const result = false || {} || null;
console.log(result);
//{}=object is the postive value

//when we  used || or OR operators its take 1st postive value 
//then or is print than value positive value

const result1 = null || false || '';
console.log(result1);
//'' = empty string = no one is positive than print last value

//when any of the value are not positive than its take a last value of result 

const result2 = [] || 0 || true;
console.log(result2);
//[] =array is the postive value


