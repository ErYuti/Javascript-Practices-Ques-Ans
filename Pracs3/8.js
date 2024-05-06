for(var i=0; i<=2; i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
//3 times 3 is print
//fix this error function or block
// 1
for(let i=0; i<=2; i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
//2
for(var i=0; i<=2; i++){
    function cal(i){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
    cal(i)
}