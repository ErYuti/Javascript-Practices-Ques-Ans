var array = [
    {name:'yuti', gender:'female'},
    {name:'deep', gender:'male'},
    {name:'jaee', gender:'female'},
    {name:'gauri', gender:'female'},
    {name:'seeta', gender:'female'},
    {name:'sham', gender:'none'},
    {name:'ram', gender:'male'},
];

var filterdArray = array.filter((ele)=>{
    return ele.gender === 'female';
})
console.log(filterdArray);