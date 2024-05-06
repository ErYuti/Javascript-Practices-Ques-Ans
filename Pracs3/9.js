setTimeout(()=>{
    console.log('settimeout');
},0)
Promise.resolve().then(()=>console.log('Promise'))
console.log('end');//sync
//end
//promise
//settimeout

