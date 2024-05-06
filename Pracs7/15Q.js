let data = {name:'yuti',age:22, skills:'js'};
let info = {city:'palghar', skills:"node.js"};
let yutiData = {...data,...info}
console.log(yutiData);
//{name: 'yuti', age: 22, skills: 'node.js', city: 'palghar'}