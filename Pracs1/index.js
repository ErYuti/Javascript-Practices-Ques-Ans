var x =20;

function foo(){
    console.log(x);
    var x=30;
}
foo()
//output- undefined
//output- 10
//output - undefined