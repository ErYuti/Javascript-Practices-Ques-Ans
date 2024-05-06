var a =20;
function out(){
    console.log(c);//undefined - hoisted
    console.log(b);//not defined
    // var a=10;
    // console.log(a); a=10
    console.log(a); // a=20 global scope
    var c=5;
}
out()