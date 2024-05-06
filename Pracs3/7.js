// exp of closure in js
function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();
console.log(get_func_inner());

//exp2
function foo(outer_arg) {
 
    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func = foo(5);
console.log(get_func(4));
