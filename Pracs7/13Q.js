//merge this two objects
let data = {name:'yuti',age:22, skils:'js'};
let info = {city:'palghar', mail:'yutimeher@gmail.com'};
let yutiData = {...data,...info}
console.log(yutiData);
// {name: 'yuti', age: 22, skils: 'js', city: 'palghar', mail: 'yutimeher@gmail.com'}