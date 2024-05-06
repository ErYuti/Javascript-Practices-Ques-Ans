function result(arr , n=1){
    if(n <= arr.length){
        for(var i=0; i<n; i++){
            console.log(arr[arr.length- 1- i]);
        }
    }else console.log(`${n} not a elements`);
}
console.log(result([1,2,3,4] , 3));