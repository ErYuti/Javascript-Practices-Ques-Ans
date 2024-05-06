// Write some JavaScript that uses the current clock and gives an 
// alert message whether the science class is over (Assume class ends at 02:30).
var cTime = new Date();

var hour = cTime.getHours(); 

var mins = cTime.getMinutes(); 

if (hour > 12 || hour == 12 && mins > 20) { 

alert("Yay, science class got over!!"); 

} else {

alert("Hang on, the science class is yet to finish!");

} 