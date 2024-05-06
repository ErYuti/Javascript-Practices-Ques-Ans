var myarray =new Array (1,4,3,6,10,0,22)
document.write(myarray.sort())
myarray.sort(function(a, b) { return b - a; }); 
document.write(myarray); 