//implicit and explicit

var obj ={
    uname:'yuti',
    // display:function (){
    //     console.log(this.uname);
    // },
    display:()=>{
        console.log(this.uname);
    },
};
var obj1 ={
    uname:'abc'
};

// console.log(obj.display());
//yuti
console.log(obj.display.call(obj1));
//abc