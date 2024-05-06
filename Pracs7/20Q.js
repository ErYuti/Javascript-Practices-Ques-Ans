let uname = 'yuti';
function getName(){
    console.log(uname);
    let uname = 'meher';
}
getName();
//Uncaught ReferenceError: Cannot access 'uname' before initialization
//when we used let cant acess before initialzation bacz of tempory dead zone

// =============================================

let uname1 = 'yuti';
function getName(){
    console.log(uname1);
}
getName();
//'yuti'
//global scope variable can acess within the any scope with diff variable name